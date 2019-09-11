import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { HeaderContext } from './Providers';

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps): any => {
  const { Header } = React.useContext(HeaderContext);
  return [
    <Header key="Header" />,
    <Navbar key="navbar" />,
    <main key="main">{children}</main>,
    <Footer key="footer" />,
  ];
};

export default Layout;
