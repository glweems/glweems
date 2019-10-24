import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from '../hooks/Providers'
import { GlobalStyle } from '../theme'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Landing from './Landing'

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}
interface Props {
  children: React.ReactNode
  path: string
}

const Layout: React.FC<Props> = ({ children, path }) => {
  return (
    <LayoutWrapper>
      {path === '/' ? <Landing /> : null}
      <Navbar key="navbar" />
      <main>{children}</main>
      <Footer key="footer" />
    </LayoutWrapper>
  )
}

export default Layout
