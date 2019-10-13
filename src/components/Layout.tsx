import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import SEO from './SEO'
import ContextProvider, { ThemeContext } from './Providers'
import { GlobalStyle } from '../theme'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Landing from './Landing'

const Styles = ({ children }: { children: any }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <>
        {children.props.path === '/' ? <Landing /> : null}
        <Navbar key="navbar" />
        <main>{children}</main>
        <Footer key="footer" />
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}

const Layout = ({ children }: { children: React.ReactChildren }) => [
  <SEO key="root-element-1" />,
  <ContextProvider key="root-element-2">
    <>
      <Styles>{children}</Styles>
    </>
  </ContextProvider>
]

export default Layout
