import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import theme, { GlobalStyle } from 'theme'
import ErrorBoundary from '@/sentry'
import Navbar from '@/navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import Transition from '@/transition'

const Main = styled.main`
  padding-top: 4rem;
`

const Layout = ({ children, location, isNavOpen, navbarLinks, isDarkMode }) => (
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
          <Navbar isNavOpen={isNavOpen} navbarLinks={navbarLinks} />
          <Main>
            <Transition location={location}>{children}</Transition>
          </Main>
        </ErrorBoundary>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({}),
  }),
  navbarLinks: PropTypes.array.isRequired,
  isNavOpen: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
}

export default connect(state => ({
  isDarkMode: state.isDarkMode,
  isNavOpen: state.isNavOpen,
  navbarLinks: state.navbarLinks,
}))(Layout)
