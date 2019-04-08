import { graphql, StaticQuery } from 'gatsby'
import { Main } from 'elements'
import theme, { GlobalStyle } from 'styled/theme'
import ErrorBoundary from '@/sentry'
import Navbar from '@/navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Navbar />
            <Main>{children}</Main>
          </React.Fragment>
        </ThemeProvider>
      </ErrorBoundary>
    )}
  />
)
export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({}),
  }),
}
