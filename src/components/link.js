import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { A } from 'elements'

const Link = props =>
  props.to ? (
    <GatsbyLink {...props}>{props.children}</GatsbyLink>
  ) : (
    <A {...props}>{props.children}</A>
  )

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
}

export default Link
