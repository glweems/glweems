import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Logo } from './Icons';

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

const Navbar = ({ toggleMenu, isMenu }: Navbar) => {
  const toggle = () => {
    toggleMenu(state => !state);
  };

  return (
    <Header className="container" isMenu={isMenu}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
        <button type="button" onClick={toggle}>
          <FontAwesomeIcon icon={isMenu ? faTimes : faBars} size="2x" />
        </button>
      </div>
    </Header>
  );
};

export default Navbar;
