/* eslint-disable no-undef */

import PropTypes from 'prop-types'
import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }

  render() {
    const {
      state: { error },
      props: { children },
    } = this
    return error ? <h1>Something went wrong!</h1> : children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}
