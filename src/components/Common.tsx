import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { transparentize } from 'polished';
import { OutboundLink as GoogleLink } from 'gatsby-plugin-google-analytics';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Account } from '..';

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    [main-start] minmax(0, 40em) [main-end]
    minmax(1em, 1fr) [full-end];
  width: 100%;

  > * {
    grid-column: main;
  }
`;

export const Link = styled(GatsbyLink)`
  padding: 2px 6px 2px 6px;
  color: ${props => props.theme.colors.text};
  letter-spacing: 0.08rem;
  /* text-decoration: none; */
  background: ${props => `linear-gradient(to bottom, transparent 62%,
   ${transparentize(0.5, props.theme.colors.primary)} 0) center
    center/0% 75% no-repeat`};
  cursor: pointer;
  transition: background-size 0.4s ease;
  &:hover {
    text-decoration: none;
    background-size: 100% 100%;
  }
  &:active {
    /* text-decoration: none; */
    background-size: 80% 100%;
  }
  &-container {
    position: relative;
    z-index: 1;
    padding: 60px;
    /* background-color: #fff; */
    /* box-shadow: 0 0 90px 10px rgba(95, 124, 179, 0.15); */
  }
`;

export const OutboundLink = styled(GoogleLink)`
  padding: 2px 6px 2px 6px;
  color: ${props => props.theme.colors.blue};
  font-size: 18px;
  letter-spacing: 0.08rem;
  /* text-decoration: none; */
  background: ${props => `linear-gradient(to bottom, transparent 62%,
   ${transparentize(0.2, props.theme.colors.bg)} 0) center
   center/0% 75% no-repeat`};
  cursor: pointer;
  transition: background-size 0.4s ease;
  &:hover {
    text-decoration: none;
    background-size: 100% 100%;
    transform: scale(1.125, 1.125);
    /* font-size: 3em; */
  }
  &:active {
    /* text-decoration: none; */
    background-size: 80% 100%;
  }
  &-container {
    position: relative;
    z-index: 1;
    padding: 60px;
  }
`;

interface SocialIconProps {
  account: Account;
  size?: SizeProp;
}

export const SocialIcon = ({ account, size }: SocialIconProps) => (
  <OutboundLink href={account.link} alt={account.name} target="_blank">
    <FaIcon
      icon={account.icon}
      size={size}
      className={account.name.toLowerCase()}
    />
  </OutboundLink>
);
export default { Link };
