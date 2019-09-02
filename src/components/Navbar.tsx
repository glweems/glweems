import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Logo } from './Icons';
import { Child } from '..';
import { ThemeContext } from './Providers';
import Button from './Button';

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
  background: ${props => transparentize(0.1, props.theme.colors.bg)};
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25em;
  }
`;
interface StickyProps {
  children: Child;
}

const Sticky = styled.div`
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

const Navbar = () => {
  const [theme, toggleTheme] = React.useContext(ThemeContext);

  return (
    <Sticky>
      <Navigation>
        <div className="container">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <Nav>
            <Link to="/blog">Blog</Link>
            <Link to="/designs">Design</Link>
            <Button type="button" className="button" onClick={toggleTheme}>
              {`${theme.mode} mode`}
            </Button>
          </Nav>
        </div>
      </Navigation>
    </Sticky>
  );
};

export default Navbar;
