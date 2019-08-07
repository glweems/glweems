import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../utils/theme';
import Layout from './Layout';
import SEO from './SEO';

const LayoutContext = createContext<{ isMenu: boolean }>({ isMenu: false });

interface Props {
  children: any;
}

const Providers = ({ children }: Props) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  return (
    <>
      <SEO />
      <LayoutContext.Provider isMenu={[isMenu, setIsMenu]}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Layout isMenu={isMenu} setIsMenu={setIsMenu}>
              {children}
            </Layout>
          </>
        </ThemeProvider>
      </LayoutContext.Provider>
    </>
  );
};

export default Providers;
