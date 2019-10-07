import * as React from 'react';
import styled from 'styled-components';
import { Link, ToogleThemeSwitch, Container } from '../Common';
import { Navigation, Links } from './NavbarStyles';
import { bg, navbarHeight } from '../../theme';

const Wrap = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: ${navbarHeight};
  background: ${bg};
  > * {
    grid-column: main;
  }
`;

const Navbar = () => (
  <Wrap>
    <Container>
      <Navigation>
        <Link to="/" className="logo">
          glw
        </Link>
        <Links>
          <Link to="/blog" className="nav-item">
            Blog
          </Link>
          <Link to="/designs" className="nav-item">
            Designs
          </Link>
          <Link to="/resume" className="nav-item">
            Resume
          </Link>
          <ToogleThemeSwitch />
        </Links>
      </Navigation>
    </Container>
  </Wrap>
);

export default Navbar;
