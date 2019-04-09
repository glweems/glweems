import { A } from 'elements'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Link = props => {
  const { to, children } = props
  return to ? (
    <GatsbyLink {...props}>{children}</GatsbyLink>
  ) : (
    <A {...props} target='_blank'>
      {children}
    </A>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
}

export default Link
