/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { OutboundLink as GoogleLink } from 'gatsby-plugin-google-analytics'

interface WhichLinkProps {
  children?: React.ReactNode
  to: string
  [key: string]: any
  partiallyActive?: boolean
  activeClassName?: string
  className?: string
  unstyled?: boolean
}

export const Link = ({
  children,
  to,
  activeClassName = 'active',
  partiallyActive,
  className = '',
  unstyled = false,
  ...other
}: WhichLinkProps) => {
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  const displayedClassName = unstyled ? className : `link ${className}`
  return internal ? (
    <GatsbyLink
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      className={displayedClassName}
      {...other}
    >
      {children}
    </GatsbyLink>
  ) : (
    <GoogleLink href={to} target="_blank" className={displayedClassName} {...other}>
      {children}
    </GoogleLink>
  )
}
