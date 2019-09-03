import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { Child } from '..';
import { ThemeContext } from './Providers';
import { GlobalStyle, makeTheme } from '../utils/theme';
import Landing from './Landing';

interface LayoutProps {
  children: React.ReactElement;
}
const Layout = (props: LayoutProps) => {
  const { children } = props;
  const { theme } = React.useContext(ThemeContext);
  const showLanding = children.props.path === '/';
  return (
    <StyledThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Landing show={showLanding} />
        <Navbar />
        {children}
        <Footer />
      </>
    </StyledThemeProvider>
  );
};

export default Layout;
