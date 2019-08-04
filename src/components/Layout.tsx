import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

import { media } from '../utils/theme';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.div`
  grid-area: Main;
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas: 'Navbar' 'Menu' 'Main' 'Footer';
  ${media.greaterThan('sm')`
  grid-template-areas: ${({ isMenu }: any): string =>
    isMenu
      ? `"Menu Navbar" "Menu Main" "Menu Footer"`
      : `"Navbar Navbar" "Main Main" "Footer Footer"`};
  grid-template-rows: auto 1fr auto;
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
  children: React.ReactChildren;
  isMenu: boolean;
  setIsMenu: any;
}

const Layout = ({ isMenu, setIsMenu, children }: LayoutProps) => (
  <StyledLayout isMenu={isMenu}>
    <Navbar isMenu={isMenu} toggleMenu={setIsMenu} />
    <Main>{children}</Main>
    <Footer />
    <Menu isMenu={isMenu} items={menuItems} />
  </StyledLayout>
);

export default Layout;
