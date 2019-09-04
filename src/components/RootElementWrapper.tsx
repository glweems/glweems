import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import SEO from './SEO';
import ContextProvider, { ThemeContext } from './Providers';
import { GlobalStyle } from '../utils/theme';

interface Props {
  children: any;
}

const Styles = ({ children }: any) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

const Providers = ({ children }: Props) => [
  <SEO />,
  <ContextProvider>
    <Styles>
      <Layout>{children}</Layout>
    </Styles>
  </ContextProvider>,
];

export default Providers;
