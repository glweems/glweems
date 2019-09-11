/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink as GoogleLink } from 'gatsby-plugin-google-analytics';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Account, Child } from '..';
import { media } from '../utils/theme';

export const Container = styled.div`
  ${({ theme: { container } }) =>
    container &&
    css`
      display: grid;
      grid-template-columns:
        [full-start] 1fr
        [fluid-start] minmax(1em, 1fr)
        [main-start] minmax(0, ${container.sm}) [main-end]
        minmax(1em, 1fr) [fluid-end]
        1fr [full-end];
      width: 100%;

      > {
        * {
          grid-column: main;
        }
        .fluid {
          grid-column: fluid;
        }
        .full {
          grid-column: full;
        }
      }

      ${media.greaterThan(`sm`)`
        grid-template-columns:
          [full-start] 1fr
          [fluid-start] minmax(1em, 1fr)
          [main-start] minmax(0, ${container.md}) [main-end]
          minmax(1em, 1fr) [fluid-end]
          1fr [full-end];
      `}
      ${media.greaterThan(`md`)`
        grid-template-columns:
          [full-start] 1fr
          [fluid-start] minmax(1em, 1fr)
          [main-start] minmax(0, ${container.lg}) [main-end]
          minmax(1em, 1fr) [fluid-end]
          1fr [full-end];
      `}
    `}
`;

interface WhichLinkProps {
  children?: string | Child | any;
  to: string;
  [key: string]: any;
  partiallyActive?: boolean;
  activeClassName?: string;
}

export const Link = ({
  children,
  to,
  activeClassName = 'activeLink',
  partiallyActive,
  ...other
}: WhichLinkProps) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.

  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <GoogleLink href={to} {...other} target="_blank">
      {children}
    </GoogleLink>
  );
};

// export const Link = styled(WhichLink)``;
/*
    padding: 2px 6px 2px 6px;
  color: ${props => props.theme.colors.text};
  letter-spacing: 0.08rem;
  text-decoration: none;
  background: ${props => `linear-gradient(to bottom, transparent 62%,
   ${transparentize(0.5, props.theme.colors.primary)} 0) center
    center/0% 75% no-repeat`};
  cursor: pointer;
  transition: background-size 0.4s ease;

  &:hover {
    background-size: 90% 100%;
  }

  *:active {
    text-decoration: none;
    background-size: 80% 100%;
  }

  &-container {
    position: relative;
    z-index: 1;
    padding: 60px;
    border-radius: 3px;
  }
*/
interface SocialIconProps {
  account: Account;
  size?: SizeProp;
}

export const SocialIcon = ({ account, size }: SocialIconProps) => (
  <Link to={account.link} alt={account.name} target="_blank">
    <FaIcon
      icon={account.icon}
      size={size}
      className={account.name.toLowerCase()}
    />
  </Link>
);
export default { Link };
