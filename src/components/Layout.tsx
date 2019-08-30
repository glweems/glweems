import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Child } from '..';

const Layout = ({ children }: { children: Child }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
