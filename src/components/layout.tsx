import Navbar from '@/navbar'
import ErrorBoundary from '@/sentry'
import { Main } from 'elements'
import { graphql, StaticQuery } from 'gatsby'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'theme'

interface Props {
  children: ReactNode[]
}

const Layout = ({ children }: Props) => (
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

export default Layout
