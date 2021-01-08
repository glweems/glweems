import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { PropsWithChildren } from 'react'
import styled, { useTheme } from 'styled-components'
import config from '../../.gatsby/config'
import Box from '../components/Common/Box'
import Link from '../components/Common/Link'
import { GhostSVG } from '../components/Icons'
import ToggleNavButton from '../components/ToggleNavButton'
import ToggleThemeSwitch from '../components/ToggleThemeSwitch'

export type NavigationProps = PropsWithChildren<{
  path: string
}>

export default function Navigation({ path, children }: NavigationProps) {
  const { mobile, isNavOpen } = useTheme()

  return (
    <Styled>
      {children}
      <Box as="nav" p={2}>
        <Link to="/" aria-label="go to homepage">
          <GhostSVG size={30} color="red" />
        </Link>

        <AnimateSharedLayout>
          {!mobile &&
            config.links.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.name}
              </Link>
            ))}
        </AnimateSharedLayout>

        <Box marginLeft="auto">
          {mobile ? <ToggleNavButton /> : <ToggleThemeSwitch />}
        </Box>
      </Box>

      <AnimatePresence>
        {mobile && isNavOpen && (
          <Box
            className="open-nav"
            as={motion.nav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0, zIndex: 0 }}
          >
            {config.links.map((link) => (
              <div className="mobile-link" key={link.name}>
                <Link
                  to={link.path}
                  getProps={({ isCurrent, isPartiallyCurrent, href }) => {
                    if (isCurrent) return { className: 'active' }
                    if (isPartiallyCurrent && href !== '/')
                      return { className: 'active' }
                  }}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </Box>
        )}
      </AnimatePresence>
    </Styled>
  )
}

const Styled = styled.header`
  width: inherit;
  height: inherit;
  padding: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.dottedBg({ dotColor: 'light', dotBgColor: 'blue' })};
  transition: all 0.25s ease-in-out;
  a {
    margin-right: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    transition: all 0.25s ease-in-out;
  }

  a.active {
    text-decoration-color: ${({ theme }) => theme.colors.red};
    text-decoration-thickness: 0.25rem;
    text-underline-offset: 2px;
  }

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
`

Navigation.defaultProps = { className: 'navigation' }
