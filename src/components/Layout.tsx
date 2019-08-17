import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';
import { Child } from '../declaration';
import { menuItems } from '../utils/data';
import About from './About';

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
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
`;

const Layout = (props: LayoutProps) => {
  const { isMenu, toggleMenu, children } = props;

  return (
    <>
      {/* <About /> */}
      <Sticky>
        <Navbar isMenu={isMenu} toggleMenu={toggleMenu} />
        <Menu items={menuItems} isMenu={isMenu} toggleMenu={toggleMenu} />
      </Sticky>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
