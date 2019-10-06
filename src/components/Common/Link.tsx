/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink as GoogleLink } from 'gatsby-plugin-google-analytics';
import styled from 'styled-components';
import { Child } from '../..';
import { text, purple } from '../../theme';

interface WhichLinkProps {
  children?: string | Child | any;
  to: string;
  [key: string]: any;
  partiallyActive?: boolean;
  activeClassName?: string;
  className?: string;
}

export const Link = ({
  children,
  to,
  activeClassName = 'active',
  partiallyActive,
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
      className={className}
      {...other}
    >
      {children}
    </GatsbyLink>
  ) : (
    <GoogleLink href={to} target="_blank" className={className} {...other}>
      {children}
    </GoogleLink>
  );
};

export const StyledLink = styled(Link)`
  color: ${text};
  text-decoration: none;
  border-bottom: 3px solid ${purple};
  :hover {
    background: ${purple};
  }
`;
