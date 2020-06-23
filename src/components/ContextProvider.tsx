import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import Layout from '../components/Layout';
import useCreateTheme, { GlobalStyle } from '../theme';
// import { GlobalStyle } from '../theme';

interface PCP {
  contexts: any[];
  children: React.ReactNode;
}
const ProviderComposer = ({ contexts, children }: PCP): JSX.Element =>
  contexts.reduceRight((kids, parent) => {
    return React.cloneElement(parent, {
      children: kids
    });
  }, children);

interface Props {
  element: React.ReactNode | React.ReactFragment;
  props?: any;
}

export const wrapRootElement: React.FC<Props> = ({ element }) => {
  return (
    <ProviderComposer contexts={[<StylesProvider key="theme" />]}>
      <>{element}</>
    </ProviderComposer>
  );
};

const StylesProvider: React.FC = ({ children }) => {
  const theme = useCreateTheme();
  return (
    <StyledThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledThemeProvider>
  );
};

export const wrapPageElement: React.FC<Props> = ({ element, props }) => {
  return (
    <StylesProvider>
      <Layout {...props}>{element}</Layout>
    </StylesProvider>
  );
};
