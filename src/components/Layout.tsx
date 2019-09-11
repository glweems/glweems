import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import { HeaderContext } from './Providers';

interface LayoutProps {
  children: any;
  isNavOpen: boolean;
}

const Layout = (props: LayoutProps): any => {
  const { Header } = React.useContext(HeaderContext);
  return [
    <Header key="Header" />,
    <Navbar key="navbar" />,
    props.children,
    <Footer key="footer" />,
  ];
};

export default Layout;
