import { configureScope, captureException } from '@sentry/browser';
import React, { ErrorInfo } from 'react';
import Container from './Common/Container';
import Link from './Common/Link';

export interface IErrorBoundaryState {
  hasError?: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundaryState> {
  public static getDerivedStateFromError() {
    return { hasError: true };
  }
  public state: IErrorBoundaryState;
  constructor(props: object) {
    super(props);
    this.state = { hasError: false };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key as keyof React.ErrorInfo]);
      });
    });
    captureException(error);
  }
  public render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <Container>
          <h1>We're sorry</h1>
          <p>
            Something went wrong with this website. I've been informed via{' '}
            <Link to="https://www.sentry.io">Sentry error reporting</Link> and
            I'll get on a fix out as soon as possible.
          </p>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
