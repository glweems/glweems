import React from 'react';
import styled, { useTheme } from 'styled-components';
import config from '../../.gatsby/config';
import Container from '../components/Common/Container';
import Link from '../components/Common/Link';
import { GhostSVG, MenuIcon, SlashCircleIcon } from '../components/Icons';
import ToggleThemeSwitch from '../components/ToggleThemeSwitch';

export type NavigationProps = {
  className?: string;
};

export default function Navigation({ className }: NavigationProps) {
  const { mobile, desktop, toggleNav, isNavOpen } = useTheme();
  return (
    <Container as="header" className={className}>
      <Nav>
        <Link
          to="/"
          css={`
            padding: ${({ theme }) => theme.space[2]};
          `}
        >
          <GhostSVG size={30} />
        </Link>
        {desktop &&
          config.links.map((link) => (
            <div key={link.name}>
              <Link to={link.path} className="button">
                {link.name}
              </Link>
            </div>
          ))}
        <div
          css={`
            margin-left: auto;
          `}
        >
          {mobile ? (
            <button onClick={toggleNav}>
              {isNavOpen ? (
                <SlashCircleIcon color="text" />
              ) : (
                <MenuIcon color="text" />
              )}
            </button>
          ) : (
            <ToggleThemeSwitch />
          )}
        </div>
      </Nav>

      {mobile && isNavOpen && (
        <OpenedNav>
          {config.links.map((link) => (
            <div key={link.name}>
              <Link to={link.path} className="button">
                {link.name}
              </Link>
            </div>
          ))}
        </OpenedNav>
      )}
    </Container>
  );
}

const OpenedNav = styled.div`
  flex-basis: 100%;
  width: 100%;
  color: var(--color-bg);
  background-color: var(--color-text);
  a {
    color: var(--color-bg);
  }
`;

Navigation.defaultProps = { className: 'navigation' };

const Nav = styled.nav`
  display: flex;
  /* align-content: center; */
  align-items: center;
  /* justify-items: flex-start; */
  width: 100%;
`;
