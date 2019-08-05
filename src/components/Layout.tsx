import React, { ReactChild, ReactChildren } from 'react';
import styled, { css } from 'styled-components';
import { Container } from 'reactstrap';
import Menu from './Menu';
import { media } from '../utils/theme';
import Navbar, { Header } from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactChildren;
  isMenu: boolean;
  setIsMenu: any;
}

const menuItems = [
  { text: 'Graphic Design', path: '/designs' },
  { text: 'Code Tutorials', path: '/tutorials' },
  { text: 'Contact', path: '/' },
];

const Main = styled.main``;

const Base = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4em 1fr auto;
  grid-template-areas:
    'Navbar'
    'Main'
    'Footer';
  ${Header} {
    grid-area: Navbar;
  }
  ${Main} {
    grid-area: Main;
  }
`;

const Default = styled(Base)`
  ${media.greaterThan('sm')`
    grid-template-rows: 4em  1fr auto;
    grid-template-columns: 15em 1fr;
    grid-template-areas:
      'Navbar Navbar'
      'Main Main'
      'Footer Footer';
    `}
`;

const Open = styled(Base)`
  grid-template-columns: 1fr;
  grid-template-rows: 4em auto 1fr auto;
  grid-template-areas:
    'Navbar'
    'Menu'
    'Main'
    'Footer';

  ${media.greaterThan('sm')`
    grid-template-rows: 4em 1fr auto;
    grid-template-columns: 15em 1fr;
    grid-template-areas:
      'Navbar Navbar'
      'Menu Main'
      'Footer Footer';
    `}
`;

const Wrapper = ({ isMenu, children }: { isMenu: boolean; children: any }) =>
  !isMenu ? <Default>{children}</Default> : <Open>{children}</Open>;

const Layout = ({ isMenu, setIsMenu, children }: LayoutProps) => (
  <Wrapper isMenu={isMenu}>
    <Navbar isMenu={isMenu} toggleMenu={setIsMenu} />
    <Main>{children}</Main>
    <Footer />
    <Menu isMenu={isMenu} items={menuItems} />
  </Wrapper>
);

export default Layout;
