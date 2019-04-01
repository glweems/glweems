import { graphql, StaticQuery } from 'gatsby'
import { Main } from 'elements'
import { sidebarLinks } from 'src/_DATA_'
import { ThemeProvider } from 'src/styled/theme'
import ErrorBoundary from '@/sentry'
import Navigation from '@/navigation'
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
          <Navigation links={sidebarLinks} />
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
