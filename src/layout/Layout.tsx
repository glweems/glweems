import { PageProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import Welcome from '../components/Welcome';
import Navigation from './Navigation';
import { AnimateSharedLayout } from 'framer-motion';
import Box from '../components/Common/Box';

export type LayoutProps = PropsWithChildren<Pick<PageProps, 'path'>>;

export default function Layout({ children, path }: LayoutProps) {
  return (
    <AnimateSharedLayout>
      <Box p={1}>
        <Navigation path={path}>{path === '/' && <Welcome />}</Navigation>
      </Box>

      <main>{children}</main>
    </AnimateSharedLayout>
  );
}
