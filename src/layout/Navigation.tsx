import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import config from '../../.gatsby/config';
import Box from '../components/Common/Box';
import Container from '../components/Common/Container';
import { GhostSVG, MenuIcon, SlashCircleIcon } from '../components/Icons';
import ToggleThemeSwitch from '../components/ToggleThemeSwitch';

export type NavigationProps = {
  path: string;
};

export default function Navigation({ path }: NavigationProps) {
  const { mobile, toggleNav, isNavOpen, colors } = useTheme();

  return (
    <Styled as="header" padding={3}>
      <nav>
        <Link
          to="/"
          aria-label="go to homepage"
          css={`
            padding: ${({ theme }) => theme.space[2]};
          `}
          activeClassName={null}
        >
          <GhostSVG size={30} />
        </Link>

        <AnimateSharedLayout>
          {!mobile &&
            config.links.map((link) => (
              <motion.div
                key={link.name}
                className={`nav-link-wrapper ${
                  link.path === path && 'selected'
                }`}
              >
                {link.path === path && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: colors.primary }}
                  />
                )}

                <Link
                  to={link.path}
                  className="button"
                  activeClassName="active-nav-link"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
        </AnimateSharedLayout>

        <Box marginLeft="auto">
          {mobile ? (
            <HamburgerMenu onClick={toggleNav} />
          ) : (
            <ToggleThemeSwitch />
          )}
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
    </Styled>
  );
}

const Styled = styled(Container)`
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

  .underline {
    position: absolute;
    bottom: -${({ theme }) => theme.space[3]};
    width: 100%;
    height: ${({ theme }) => theme.space[1]};
    background: transparent;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  .active-nav-link {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondaryBg};
  }

  .nav-link-wrapper {
    position: relative;
    margin-right: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }

  .nav-link-wrapper.selected {
    color: ${({ theme }) => theme.colors.text};
  }
`;

function HamburgerMenu(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { isNavOpen } = useTheme();
  return (
    <button {...props} style={{ zIndex: 10 }}>
      <AnimatePresence>
        {isNavOpen ? (
          <SlashCircleIcon color="text" />
        ) : (
          <MenuIcon color="text" />
        )}
      </AnimatePresence>
    </button>
  );
}

Navigation.defaultProps = { className: 'navigation' };
