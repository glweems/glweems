import { graphql } from 'gatsby'
import { Main } from 'styled/elements'
import theme from 'styled/theme'
import ErrorBoundary from '@/sentry'
import Navbar from '@/navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  width: 100%;
  font-family: ${props => props.theme.font};
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.dark};

  h1 {
    font-weight: unset;
  }

  a {
    font-weight: bold;
    color: ${props => props.theme.colors.blue}!important;
  }
  img {
    background: none !important;
    padding: 0;
    margin: 0;
  }
  button {
    border: none;
  }
`

const Layout = ({ children }) => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
        <Main>{children}</Main>
      </React.Fragment>
    </ThemeProvider>
  </ErrorBoundary>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({}),
  }),
}

export const LayoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
