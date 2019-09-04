/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps): any => [
  <Navbar />,
  children,
  <Footer />,
];

export default Layout;
