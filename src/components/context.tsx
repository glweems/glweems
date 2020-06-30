import React from 'react';
import { ThemeProvider } from 'styled-components';
import useCreateTheme, { GlobalStyle } from '../theme';
import SEO from './SEO';
import { WrapRootElementBrowserArgs, WrapPageElementBrowserArgs } from 'gatsby';
import Layout from '../layout/Layout';

function ContextProvider(props: {
  children: WrapRootElementBrowserArgs['element'];
}) {
  const theme = useCreateTheme();
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export function wrapRootElement({ element }: WrapRootElementBrowserArgs) {
  return <ContextProvider>{element}</ContextProvider>;
}

export function wrapPageElement({
  element,
  props,
}: WrapPageElementBrowserArgs) {
  return (
    <Layout>
      <SEO />
      <GlobalStyle />
      {element}
    </Layout>
  );
}
