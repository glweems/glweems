import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import SEO from './SEO';
import ContextProvider, { ThemeContext } from './Providers';
import { GlobalStyle } from '../style';

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
  <SEO key="root-element-1" />,
  <ContextProvider key="root-element-2">
    <Styles>
      <Layout>{children}</Layout>
    </Styles>
  </ContextProvider>,
];

export default Providers;
