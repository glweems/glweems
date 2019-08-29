import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { menuItems } from '../utils/data';
import { Child } from '..';

interface LayoutProps {
  children: Child;
  isMenu: boolean;
  toggleMenu(): void;
}

interface StickyProps {
  children: JSX.Element[];
}

const Sticky = styled.div<StickyProps>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`;

const Layout = (props: LayoutProps) => {
  const { isMenu, toggleMenu, children } = props;

  return (
    <>
      <Sticky>
        <Navbar isMenu={isMenu} toggleMenu={toggleMenu} />
        <Navigation items={menuItems} isMenu={isMenu} toggleMenu={toggleMenu} />
      </Sticky>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
