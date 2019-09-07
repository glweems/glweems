import * as React from 'react';
import styled, { ThemeContext as StyledThemeContext } from 'styled-components';
// import { transparentize } from 'polished';
import { useSpring, animated, config } from 'react-spring';
import { transparentize } from 'polished';
import { Link, Container } from '../Common';
import { NavContext, ThemeContext } from '../Providers';
import {
  NavbarStyles,
  Navigation,
  BurgerStyles,
  DropdownWrapper,
  NavLinks,
} from './NavbarStyles';

export const BurgerMenu = () => {
  const { isNavOpen, toggleNav } = React.useContext(NavContext);

  return (
    <BurgerStyles className="burger-menu" onClick={toggleNav}>
      <div className={isNavOpen ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </BurgerStyles>
  );
};

export const Dropdown = (props: any) => {
  const { isNavOpen, toggleNav } = React.useContext(NavContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { open } = useSpring({ open: isNavOpen ? 0 : 1 });

  const dropdown = {
    transform: open
      .interpolate({
        range: [0, 0.2, 0.3, 1],
        output: [0, -20, 0, -200],
      })
      .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
  };
  return isNavOpen ? (
    <DropdownWrapper style={dropdown}>
      <NavLinks>
        <li>
          <Link to="/blog" onClick={toggleNav}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/designs" onClick={toggleNav}>
            Design
          </Link>
        </li>
        <li>
          <button type="button" className="button" onClick={toggleTheme}>
            {theme.mode}
          </button>
        </li>
      </NavLinks>
    </DropdownWrapper>
  ) : null;
};

const Navbar = (): any[] => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const barAnimation = useSpring({
    from: { transform: `translate3d(0, -10rem, 0)` },
    transform: `translate3d(0, 0, 0)`,
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return [
    <NavbarStyles key="navbar" style={linkAnimation}>
      <Navigation>
        <Link to="/" className="logo">
          glweems
        </Link>
        <NavLinks>
          <Link to="/blog/" className="link">
            Blog
          </Link>
          <Link to="/designs/" className="link">
            Designs
          </Link>
          <button type="button" className="button" onClick={toggleTheme}>
            {theme.mode}
          </button>
        </NavLinks>
        <BurgerMenu />
      </Navigation>
    </NavbarStyles>,
    <Dropdown key="collapse" style={barAnimation} />,
  ];
};

export default Navbar;
