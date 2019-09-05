import React, { useContext } from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Link as GatsbyLink } from 'gatsby';
import { Link, Container } from './Common';
import { Logo } from './Icons';
import { Child } from '..';
import { ThemeContext } from './Providers';
// import { ThemeContext, NavContext } from './Providers';

interface Navbar {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
}

export const Header = styled.header`
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0.25em;
  background: ${props => props.theme.colors.bg};
  opacity: 0.9;
`;

const Navigation = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  height: ${props => props.theme.navbarHeight};
`;
interface StickyProps {
  children: Child;
}

const Wrapper = styled(Container)`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background: ${props => transparentize(0.1, props.theme.colors.bg)};
`;

const Nav = styled.nav`
  a {
    margin-right: 1em;
  }
  a:last-child {
    margin: 0;
  }
`;

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Navigation className="container">
        <GatsbyLink to="/">
          <Logo />
        </GatsbyLink>
        <Nav>
          <Link to="/blog">Blog</Link>
          <Link to="/designs">Design</Link>
          <button type="button" className="button" onClick={toggleTheme}>
            {theme && !theme.isDarkMode ? 'dark' : 'light'}
          </button>
          {/* <button type="button" className="button" onClick={toggleNav}>
            {isNavOpen ? 'open' : 'closed'}
          </button> */}
        </Nav>
      </Navigation>
    </Wrapper>
  );
};

export default Navbar;
