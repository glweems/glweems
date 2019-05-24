import { StaticQuery, graphql } from 'gatsby'
import theme, { GlobalStyle } from 'theme'
import ErrorBoundary from '@/sentry'
import Navbar from '@/navbar'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { store } from 'state/store'
import Footer from '@/footer'

const Main = styled.main`
  min-height: 100vh;
  padding-top: 4rem;
`

const Layout = ({ children, isDarkMode }) => (
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
      <ThemeProvider theme={isDarkMode ? theme.light : theme.dark}>
        <ErrorBoundary>
          <GlobalStyle />
          <Navbar {...store.getState()} />
          <Main>{children}</Main>
          {/* <Footer /> */}
        </ErrorBoundary>
      </ThemeProvider>
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
  isDarkMode: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({}),
  }),
}
