/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink as GoogleLink } from 'gatsby-plugin-google-analytics';
import { css } from 'styled-components';
import { lighten } from 'polished';
import { Child } from '../..';

interface WhichLinkProps {
  children?: string | Child | any;
  to: string;
  [key: string]: any;
  partiallyActive?: boolean;
  activeClassName?: string;
  unstyled?: boolean;
}

export const anchorStyles = css`
  .link {
    position: relative;
    margin: 2px 6px 2px 6px;
    color: ${props => props.theme.colors.blue};
    font: inherit;
    font-weight: 500;
    font-size: 115% !important;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    text-decoration: none !important;
    vertical-align: baseline;
    border: 0;
    cursor: pointer;
  }

  .link:hover {
    color: ${props => lighten(0.1, props.theme.colors.blue)};
  }

  .link.active {
    color: ${props => props.theme.colors.yellow};
  }
`;

export const Link = ({
  children,
  to,
  activeClassName = 'active',
  partiallyActive,
  unstyled = false,
  ...other
}: WhichLinkProps) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.

  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  let LinkComponent: React.FC;

  const createClassName = unstyled ? `` : `link`;

  if (internal) {
    LinkComponent = () => (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
        className={createClassName}
      >
        {children}
      </GatsbyLink>
    );
  } else {
    LinkComponent = () => (
      <GoogleLink
        href={to}
        {...other}
        target="_blank"
        className={createClassName}
      >
        {children}
      </GoogleLink>
    );
  }

  return <LinkComponent />;
};
