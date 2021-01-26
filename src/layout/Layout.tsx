import { ErrorBoundary } from 'react-error-boundary'
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
import Link from '../components/Common/Link'
import Json from 'react-json-view'
import { GoogleFont, TypographyStyle } from 'react-typography'
import SEO from '../components/SEO'
import typography from '../utils/typography'
export type LayoutProps = PropsWithChildren<Pick<PageProps, 'path'>>

export default function Layout({ children, path }: LayoutProps) {
  return (
    <React.Fragment>
      <SEO />
      {/* <Navigation path={path} /> */}

      <main className="container">
        <ErrorBoundary FallbackComponent={Whoops}>{children}</ErrorBoundary>
      </main>

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
    </React.Fragment>
  )
}
