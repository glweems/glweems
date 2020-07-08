import { PageProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import Welcome from '../components/Welcome';
import Navigation from './Navigation';
import { AnimateSharedLayout } from 'framer-motion';

export type LayoutProps = PropsWithChildren<Pick<PageProps, 'path'>>;

export default function Layout({ children, path }: LayoutProps) {
  return (
    <React.Fragment>
      <AnimateSharedLayout>
        {path === '/' && <Welcome />}
        <Navigation path={path} />
        <main>{children}</main>
      </AnimateSharedLayout>
    </React.Fragment>
  );
}
