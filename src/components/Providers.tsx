import React, { createContext } from 'react'
import { DefaultTheme } from 'styled-components'
import useTheme from '../hooks/useTheme'
import useNav from '../hooks/useNav'
import { Child } from '..'

interface PCP {
  contexts: any[]
  children: Child
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

export default ({ children }: any) => (
  <ProviderComposer contexts={[<ThemeProvider key="theme-provider" />, <NavProvider key="nav-provider" />]}>{children}</ProviderComposer>
)
