import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../utils/theme';
import Layout from './Layout';
import SEO from './SEO';

interface LayoutContext {
  isMenu: boolean;
}

const LayoutContext = createContext<Partial<LayoutContext>>({});

interface Props {
  children: Element;
}

const Providers = ({ children }: Props) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenu(state => !state);
  };

  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Layout isMenu={isMenu} toggleMenu={toggleMenu}>
            {children}
          </Layout>
        </>
      </ThemeProvider>
    </>
  );
};

export default Providers;
