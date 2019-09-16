/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink as GoogleLink } from 'gatsby-plugin-google-analytics';
import { Child } from '../..';

interface WhichLinkProps {
  children?: string | Child | any;
  to: string;
  [key: string]: any;
  partiallyActive?: boolean;
  activeClassName?: string;
  unstyled?: boolean;
  className?: string;
}

export const Link = ({
  children,
  to,
  activeClassName = 'active',
  partiallyActive,
  unstyled = false,
  className = '',
  ...other
}: WhichLinkProps) => {
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others

  return internal ? (
    <GatsbyLink
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      className={`${className} ${unstyled || 'link'}`}
      {...other}
    >
      {children}
    </GatsbyLink>
  ) : (
    <GoogleLink
      href={to}
      target="_blank"
      className={`${className} ${unstyled || 'link'}`}
      {...other}
    >
      {children}
    </GoogleLink>
  );
};
