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

const Layout = (props: LayoutProps) => {
  const { isMenu, toggleMenu, children } = props;

  return (
    <>
      <Navbar isMenu={isMenu} toggleMenu={toggleMenu} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
