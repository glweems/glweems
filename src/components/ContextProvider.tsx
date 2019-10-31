import React, { createContext } from 'react'
import { DefaultTheme } from 'styled-components'
import useTheme from '../hooks/useTheme'
import useNav from '../hooks/useNav'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import { GlobalStyle } from '../theme'

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
  props?: any
}

export const wrapRootElement: React.FC<Props> = ({ element }) => {
  return (
    <ProviderComposer contexts={[<ThemeProvider key="theme" />, <NavProvider key="nav" />]}>
      <>{element}</>
    </ProviderComposer>
  )
}

const StylesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <StyledThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledThemeProvider>
  )
}

export const wrapPageElement: React.FC<Props> = ({ element, props }) => {
  return (
    <StylesProvider>
      <Layout {...props}>{element}</Layout>
    </StylesProvider>
  )
}
