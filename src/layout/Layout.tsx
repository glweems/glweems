import { PageProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import Container from '../components/Common/Container';
import Welcome from '../components/Welcome';
import Navigation from './Navigation';

export type LayoutProps = PropsWithChildren<Pick<PageProps, 'path'>>;

export default function Layout({ children, path }: LayoutProps) {
  return (
    <React.StrictMode>
      <React.Fragment>
        {path === '/' && <Welcome />}
        <Navigation />
        <Container smFlush>
          <main>
            <React.StrictMode>{children}</React.StrictMode>
          </main>
        </Container>
      </React.Fragment>
    </React.StrictMode>
  );
}
