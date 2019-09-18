import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import Landing from './Landing';

interface LayoutProps {
  children: any;
}

const Layout = ({
  children,
}: LayoutProps): [
  JSX.Element | null,
  JSX.Element,
  JSX.Element,
  JSX.Element,
] => {
  return [
    children.props.path === '/' ? <Landing /> : null,
    <Navbar key="navbar" />,
    <main key="main">{children}</main>,
    <Footer key="footer" />,
  ];
};

export default Layout;
