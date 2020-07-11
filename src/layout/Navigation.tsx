import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import { darken } from 'polished';
import React, { PropsWithChildren } from 'react';
import styled, { css, useTheme } from 'styled-components';
import config from '../../.gatsby/config';
import Box from '../components/Common/Box';
import Container from '../components/Common/Container';
import { GhostSVG } from '../components/Icons';
import ToggleNavButton from '../components/ToggleNavButton';
import ToggleThemeSwitch from '../components/ToggleThemeSwitch';
import NavLink from './NavLink';

export default function Navigation({
  path,
  children,
}: PropsWithChildren<{
  path: string;
}>) {
  console.log('path: ', path);
  const { mobile, isNavOpen, colors } = useTheme();

  return (
    <Styled>
      <Container>
        {children}
        <nav>
          <NavLink to="/" aria-label="go to homepage">
            <GhostSVG size={30} />
          </NavLink>

          {!mobile &&
            config.links.map((link) => (
              <NavLink to={link.path}>{link.name}</NavLink>
            ))}

          <Box marginLeft="auto">
            {mobile ? <ToggleNavButton /> : <ToggleThemeSwitch />}
          </Box>
        </nav>

        <AnimatePresence>
          {mobile && isNavOpen && (
            <Container
              className="open-nav"
              as={motion.nav}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0, zIndex: 0 }}
            >
              {config.links.map((link) => (
                <div className="mobile-link" key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </div>
              ))}
            </Container>
          )}
        </AnimatePresence>
      </Container>
    </Styled>
  );
}

const checkered = css`
  --bg-color: ${({ theme }) =>
    theme.isDarkMode
      ? darken(0.1, theme.colors.purple)
      : darken(0.3, theme.colors.yellow)};

  color: ${(props) => props.theme.colors.dark};
  background: linear-gradient(
      45deg,
      transparent 49%,
      var(--bg-color) 50%,
      var(--bg-color) 50%,
      transparent 51%,
      transparent
    ),
    linear-gradient(
      -45deg,
      transparent 49%,
      var(--bg-color) 50%,
      var(--bg-color) 50%,
      transparent 51%,
      transparent
    );
  background-color: ${({ theme }) => theme.colors.welcome};
  background-position: 0% 0%;
  background-size: 16px 16px;
  border: 1px var(--bg-color) solid;
  border-radius: 4px;
`;

const Styled = styled.header`
  ${checkered};
  padding: ${({ theme }) => theme.space[1]};
  nav {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .open-nav {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    width: 100%;
    padding: ${({ theme }) => theme.space[2]};
    background-color: ${({ theme }) => theme.colors.rootBg};
    border-radius: 4px;
    a {
      color: ${({ theme }) => theme.colors.text};
    }
  }
  .mobile-link {
    display: flex;
    align-content: center;
    align-items: center;
    width: 100%;
    padding: ${({ theme }) => theme.space[2]};
  }
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    user-select: none;
  }
`;

Navigation.defaultProps = { className: 'navigation' };
