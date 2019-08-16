import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';
import { Child } from '../declaration';
import { menuItems } from '../utils/data';

interface LayoutProps {
  children: Child;
  isMenu: boolean;
  toggleMenu(): void;
}

interface StickyProps {
  children: JSX.Element[];
}

const Sticky = styled.div<StickyProps>`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Main = styled.main`
  margin: 2em 0;
  padding: 2rem 0;
`;

const Layout = ({ isMenu, toggleMenu, children }: LayoutProps) => (
  <>
    <Sticky>
      <Navbar isMenu={isMenu} toggleMenu={toggleMenu} />
      <Menu items={menuItems} isMenu={isMenu} toggleMenu={toggleMenu} />
    </Sticky>
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
