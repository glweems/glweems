import React from 'react';
import styled from 'styled-components';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';
import { Child } from '../declaration';

interface LayoutProps {
  children: React.ReactChildren;
  isMenu: boolean;
  setIsMenu: any;
}

const menuItems = [
  { text: 'Graphic Design', path: '/designs', icon: faPenNib },
  { text: 'Code Tutorials', path: '/tutorials', icon: faReadme },
];

interface StickyProps {
  children: Child;
}

const Sticky = styled.div<StickyProps>`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Main = styled.main`
  margin-top: 2em;
  padding-top: 2rem;
`;

const Layout = ({ isMenu, setIsMenu, children }: LayoutProps) => (
  <>
    <Sticky>
      <Navbar isMenu={isMenu} toggleMenu={setIsMenu} />
      <Menu items={menuItems} setIsMenu={setIsMenu} isMenu={isMenu} />
    </Sticky>
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
