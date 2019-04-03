import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
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
    if (this.state.error) {
      // render fallback UI
      return <h1>Something went wrong!</h1>
    }
    // when there's not an error, render children untouched
  }
}
