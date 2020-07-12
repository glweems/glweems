import { motion } from 'framer-motion';
import { GatsbyLinkProps, Link } from 'gatsby';
import { transparentize } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

export type NavLinkProps = Omit<
  GatsbyLinkProps<{
    isMatch: boolean;
  }>,
  'ref'
>;

export default function NavLink(props: NavLinkProps) {
  return (
    <StyledNavLink>
      <Link
        {...props}
        getProps={({ isCurrent, isPartiallyCurrent, href }) => {
          if (isCurrent) return { className: 'active' };
          if (isPartiallyCurrent && href !== '/')
            return { className: 'active' };
        }}
      />
    </StyledNavLink>
  );
}

const StyledNavLink = styled(motion.div)`
  position: relative;
  margin-right: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  a {
    padding: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.dark};
    /* font: ${({ theme }) => theme.fonts.sans}; */
    font-size: ${({ theme }) => theme.fontSizes[3]};
    border-radius: ${({ theme }) => theme.radii[2]};
    :hover {
      background-color: ${({ theme }) =>
        theme.isDarkMode
          ? 'rgba(172, 146, 246, 0.25)'
          : 'rgba(217, 151, 12, 0.25)'};
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

  .active {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondaryBg};
  }



  .nav-link-wrapper.selected {
    color: ${({ theme }) => theme.colors.text};
  }
`;
