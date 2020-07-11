import * as React from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import { motion } from 'framer-motion';
import { GhostSVG } from '../components/Icons';
import { useMatch, useLocation } from '@reach/router';
import styled, { css } from 'styled-components';
import { transparentize, darken } from 'polished';
import { buttonCss } from '../theme';

export type NavLinkProps = Omit<GatsbyLinkProps<{}>, 'ref'>;

export default function NavLink(props: NavLinkProps) {
  const location = useLocation();
  console.log('location: ', location);
  const match = useMatch(props.to);
  const isMatch =
    match !== null || props.to === '/' + location.pathname.split('/')[1];

  return (
    <StyledNavLink isMatch={isMatch}>
      <Link {...props} />
      {isMatch && <motion.span layoutId="underline" className="underline" />}
    </StyledNavLink>
  );
}

const StyledNavLink = styled(motion.div)<{ isMatch: boolean }>`
  position: relative;
  margin-right: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  a {
    padding: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.dark};
    font: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSizes[3]};
    border-radius: ${({ theme }) => theme.radii[3]};
    :hover {
      background-color: ${({ theme }) =>
        theme.isDarkMode
          ? 'rgba(172, 146, 246, 0.1)'
          : 'rgba(217, 151, 12, 0.1)'};
    }
  }

  .underline {
    position: absolute;
    bottom: -${({ theme }) => theme.space[3]};
    left: ${({ theme }) => theme.space[1]};
    width: 88%;
    height: ${({ theme }) => theme.space[1]};
    margin: auto;
    background: transparent;
    background-color: ${({ theme }) => transparentize(0.9, theme.colors.dark)};
    border-radius: ${({ theme }) => theme.radii[2]};
  }

  .active-nav-link {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondaryBg};
  }

  .nav-link-wrapper {
  }

  .nav-link-wrapper.selected {
    color: ${({ theme }) => theme.colors.text};
  }
`;
