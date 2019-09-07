import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { Child } from '..';

interface LayoutProps {
  children: React.ReactNode;
  isNavOpen: boolean;
}

const Layout = ({ children }: LayoutProps) => [
  <Navbar key="navbar" />,
  children,
  <Footer key="footer" />,
];

export default Layout;
