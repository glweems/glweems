import { A } from 'elements'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Icon = props =>
  props.to ? (
    <GatsbyLink {...props}>{props.children}</GatsbyLink>
  ) : props.href ? (
    <A {...props}>{props.children}</A>
  ) : (
    <div>hello</div>
  )

Icon.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any,
}

export default Icon