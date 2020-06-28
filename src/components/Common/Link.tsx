/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink as GoogleLink } from 'gatsby-plugin-google-analytics';

interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  to: string;
  [key: string]: any;
  partiallyActive?: boolean;
  activeClassName?: string;
  className?: string;
  unstyled?: boolean;
}

export default function Link({
  children,
  to,
  href,
  activeClassName = 'active',
  partiallyActive,
  className = '',
  unstyled = false,
  ...other
}: LinkProps) {
  if (href) {
    return (
      <GoogleLink href={href} target="_blank" className="link" {...other}>
        {children}
      </GoogleLink>
    );
  }

  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  const displayedClassName = unstyled ? className : `link ${className}`;

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
  );
}
