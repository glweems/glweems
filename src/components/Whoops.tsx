import { ErrorBoundaryProps } from '@sentry/react/dist/errorboundary'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import Box from './Common/Box'

const Whoops: FC<ErrorBoundaryProps> = () => (
  <Box>
    <h1>We&apos;re sorry</h1>
    <p>
      Something went wrong with this website. I&apos;ve been informed via{' '}
      <Link to="https://www.sentry.io">Sentry error reporting</Link> and
      I&apos;ll get on a fix out as soon as possible.
    </p>
  </Box>
)

export default Whoops
