import { A } from 'elements'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Link = props =>
  props.to ? (
    <GatsbyLink {...props}>{props.children}</GatsbyLink>
  ) : (
    <A {...props} target='_blank'>
      {props.children}
    </A>
  )

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
}

export default Link
