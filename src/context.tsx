import React from 'react';
import { ThemeProvider } from 'styled-components';
import useCreateTheme from './theme';
import SEO from './components/SEO';
import { WrapRootElementBrowserArgs, WrapPageElementBrowserArgs } from 'gatsby';
import Layout from './layout/Layout';
import GlobalCss from './utils/GlobalCss';
import ErrorBoundary from './components/ErrorBoundary';

export type ContextProviderProps = {
  children: WrapRootElementBrowserArgs['element'];
};

function ContextProvider(props: ContextProviderProps) {
  const theme = useCreateTheme();
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export function wrapRootElement({ element }: WrapRootElementBrowserArgs) {
  return <ContextProvider>{element}</ContextProvider>;
}

export function wrapPageElement({
  element,
  props: { path },
}: WrapPageElementBrowserArgs) {
  return (
    <React.Fragment>
      <SEO />
      <GlobalCss />
      <Layout path={path}>
        <ErrorBoundary>{element}</ErrorBoundary>
      </Layout>
    </React.Fragment>
  );
}
