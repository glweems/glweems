import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { Child } from '..';
import { ThemeContext } from './Providers';
import { GlobalStyle, makeTheme } from '../utils/theme';

const Layout = ({ children }: { children: Child }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <StyledThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    </StyledThemeProvider>
  );
};

export default Layout;
