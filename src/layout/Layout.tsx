import { ErrorBoundary } from '@sentry/react'
import { PageProps } from 'gatsby'
import React, { PropsWithChildren } from 'react'
import Box from '../components/Common/Box'
import Welcome from '../components/Welcome'
import Whoops from '../components/Whoops'
import Navigation from './Navigation'

export type LayoutProps = PropsWithChildren<Pick<PageProps, 'path'>>

export default function Layout({ children, path }: LayoutProps) {
  return (
    <React.StrictMode>
      <Box position="relative">
        <Navigation path={path}>{path === '/' && <Welcome />}</Navigation>

        <main>
          <ErrorBoundary fallback={Whoops}>{children}</ErrorBoundary>
        </main>
      </Box>
    </React.StrictMode>
  )
}
