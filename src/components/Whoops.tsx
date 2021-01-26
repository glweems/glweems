import {
  ErrorBoundaryProps,
  FallbackProps,
  ErrorBoundaryPropsWithComponent,
} from 'react-error-boundary'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import Box from './Common/Box'
import Json from 'react-json-view'
import { error } from 'console'
const Whoops: FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <Box className="paper">
    <h1>We&apos;re sorry</h1>
    <p>
      Something went wrong with this website. I&apos;ve been informed via{' '}
      <Link to="https://www.sentry.io">Sentry error reporting</Link> and
      I&apos;ll get on a fix out as soon as possible.
    </p>

    <Link to="/" onClick={resetErrorBoundary}>
      Go Home
    </Link>
  </Box>
)

export const myErrorHandler = (
  error: Error,
  info: { componentStack: string }
) => {
  // Do something with the error
  // E.g. log to an error logging client here
}

export default Whoops
