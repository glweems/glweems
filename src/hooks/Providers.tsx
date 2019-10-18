import React, { createContext } from 'react'
import { DefaultTheme } from 'styled-components'
import useTheme from './useTheme'
import useNav from './useNav'

import Layout from '../components/Layout'

interface PCP {
  contexts: any[]
  children: React.ReactNode
}
const ProviderComposer = ({ contexts, children }: PCP): JSX.Element =>
  contexts.reduceRight((kids, parent) => {
    return React.cloneElement(parent, {
      children: kids
    })
  }, children)

type ThemeContext = {
  theme: DefaultTheme
  toggleTheme: () => void | any
}

export const ThemeContext = createContext<ThemeContext>({
  theme: { mode: 'dark' },
  toggleTheme: () => null
})

export const ThemeProvider = ({ children }: any) => {
  const { theme, toggleTheme } = useTheme()
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

type NavContext = {
  isNavOpen: boolean | null
  setNav: React.Dispatch<React.SetStateAction<boolean>> | null
  toggleNav: () => void | null
}

export const NavContext = createContext<NavContext>({
  isNavOpen: null,
  setNav: () => null,
  toggleNav: () => null
})

export const NavProvider = ({ children }: any) => {
  const { isNavOpen, setNav, toggleNav } = useNav()
  return <NavContext.Provider value={{ isNavOpen, setNav, toggleNav }}>{children}</NavContext.Provider>
}

interface Props {
  element: React.ReactNode | React.ReactFragment
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
  <ProviderComposer
    contexts={[
      <ThemeProvider key="theme" />,
      // <StyledThemeProvider key="styled" theme={theme} />,
      <NavProvider key="nav" />
    ]}
  >
    <>{element}</>
  </ProviderComposer>
)

export const wrapPageElement: React.FC<Props> = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
