import { StaticQuery, graphql } from 'gatsby'
import theme, { GlobalStyle } from 'theme'

import ErrorBoundary from '@/sentry'
import { Main } from 'elements'
import Navbar from '@/navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { store } from 'state/store'

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
            <Navbar {...store} />
            <Main>{children}</Main>
            {JSON.stringify(store)}
          </React.Fragment>
        </ThemeProvider>
      </ErrorBoundary>
    )}
  />
)

const mapStateToProps = state => ({
  isDarkMode: state.isDarkMode,
  isNavOpen: state.isNavOpen,
  navbarLinks: state.navbarLinks,
})

export default connect(mapStateToProps)(Layout)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({}),
  }),
}
