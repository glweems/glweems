import { graphql, StaticQuery } from 'gatsby'
import { Main } from 'elements'
import { ThemeProvider } from 'src/styled/theme'
import ErrorBoundary from '@/sentry'
import Navbar from '@/navbar'
import PropTypes from 'prop-types'
import React from 'react'

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
        <ThemeProvider>
          <Navbar />
          <Main>{children}</Main>
        </ThemeProvider>
      </ErrorBoundary>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({}),
  }),
}

export default Layout
