import React, { useState, createContext, ReactChildren } from 'react';
import styled, { ThemeProvider, StyledComponent } from 'styled-components';
import Menu from './Menu';
import SEO from './SEO';
import { theme, media } from '../utils/theme';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutContext = createContext();

const Main = styled.div`
  grid-area: Main;
`;

const Layout: StyledComponent<any, any, any> = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr 10em;
  grid-template-areas: 'Navbar' 'Menu' 'Main' 'Footer';
  ${media.greaterThan('sm')`
  grid-template-areas: ${({ isMenu }: any) =>
    isMenu
      ? `"Menu Navbar" "Menu Main" "Menu Footer"`
      : `"Navbar Navbar" "Main Main" "Footer Footer"`};
  grid-template-rows: auto 1fr 6em;
  grid-template-columns: 10em 1fr;
  `}
`;

const menuItems = [
  { text: 'Graphic Design', path: '/designs' },
  { text: 'Code Tutorials', path: '/tutorials' },
  { text: 'Gallery', path: '/gallery' },
  { text: 'Contact', path: '/' },
];

interface LayoutProps {
  children?: React.ReactChild | ReactChildren;
}

export default ({ children }: LayoutProps) => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <SEO />
      <LayoutContext.Provider isMenu={[isMenu, setIsMenu]}>
        <ThemeProvider theme={theme}>
          <Layout isMenu={isMenu}>
            <Navbar isMenu={isMenu} toggleMenu={setIsMenu} />

            <Main>{children}</Main>

            <Footer />

            <Menu isMenu={isMenu} items={menuItems} />
          </Layout>
        </ThemeProvider>
      </LayoutContext.Provider>
    </>
  );
};
