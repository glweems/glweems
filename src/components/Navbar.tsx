import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Logo } from './Icons';
import { Child } from '..';

interface Navbar {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
}

export const Header = styled.header<{ isMenu: boolean }>`
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25em;
  background: ${props => props.theme.colors.dark};
  opacity: 0.9;
  button {
    color: ${props => props.theme.colors[!props.isMenu ? 'yellow' : 'red']};
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25em;
  background: ${props => props.theme.colors.dark};
  opacity: 0.9;
`;
interface StickyProps {
  children: Child;
}

const Sticky = styled.div<StickyProps>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`;

const Nav = styled.nav`
  a {
    margin-right: 1em;
  }
  a:last-child {
    margin: 0;
  }
`;

const Navbar = () => (
  <Sticky>
    <Navigation className="container">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Nav>
        <Link to="/blog">Blog</Link>
        <Link to="/designs">Design</Link>
      </Nav>
    </Navigation>
  </Sticky>
);

export default Navbar;
