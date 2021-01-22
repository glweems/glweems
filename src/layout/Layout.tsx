import { ErrorBoundary } from '@sentry/react'
import { PageProps } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React, { PropsWithChildren } from 'react'
import Box from '../components/Common/Box'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Whoops from '../components/Whoops'
import Navigation from './Navigation'
import config from '../../.gatsby/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

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

      <Footer
        sections={{
          'Follow Me': Object.entries(config.accounts).map(
            ([name, account]) => (
              <OutboundLink
                key={name}
                href={account.link}
                target="_blank"
                rel="noopener"
                className="link"
                style={{
                  display: 'flex',
                  placeItems: 'center',
                  margin: '1rem',
                }}
              >
                <FontAwesomeIcon
                  icon={account.icon}
                  style={{ marginRight: '.5rem' }}
                />
                <span>{name}</span>
              </OutboundLink>
            )
          ),
        }}
      />
    </React.StrictMode>
  )
}
