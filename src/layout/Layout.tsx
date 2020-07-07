import { PageProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import Welcome from '../components/Welcome';
import Navigation from './Navigation';

export type LayoutProps = PropsWithChildren<Pick<PageProps, 'path'>>;

export default function Layout({ children, path }: LayoutProps) {
  return (
    <React.Fragment>
      {path === '/' && <Welcome />}
      <Navigation />
      <main>{children}</main>
    </React.Fragment>
  );
}
