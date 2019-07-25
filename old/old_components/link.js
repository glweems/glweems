import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Link = props => {
  const { to, children } = props
  return to ? (
    <GatsbyLink {...props}>{children}</GatsbyLink>
  ) : (
    <a {...props} target="_blank">
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
}

export default Link
