import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Glweems } from './Icons';

interface NavbarProps {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
}

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }: StyleProps) => theme.bg};
  svg {
    fill: ${({ theme }: StyleProps) => theme.yellow};
  }
  button {
    color: ${({ theme }) => theme.muted};
  }
`;

const Navbar = ({ toggleMenu, isMenu }: NavbarProps) => (
  <Header className="container-fluid">
    <div>
      <button type="button" onClick={() => toggleMenu(!isMenu)}>
        <FontAwesomeIcon icon={isMenu ? faTimes : faBars} size="lg" />
      </button>
    </div>
    <Link to="/">
      <Glweems height="2em" />
    </Link>
    <div>
      <button type="button">
        <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
      </button>
    </div>
  </Header>
);

export default Navbar;
