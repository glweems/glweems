import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Glweems } from './Icons';

interface Props {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isMenu: boolean;
}

const Header = styled.header`
  grid-area: Navbar;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 1rem;
  grid-template-rows: 1fr;
  grid-template-areas: '. . .';
  background: ${({ theme }: StyleProps) => theme.red};
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  button {
    width: fit-content;
    color: ${({ theme }) => theme.blue};
    fill: ${({ theme }) => theme.blue};
  }
`;

const Navbar = ({ toggleMenu, isMenu }: Props) => (
  <Header>
    <button type="button" onClick={() => toggleMenu(!isMenu)}>
      <FontAwesomeIcon icon={isMenu ? faTimes : faBars} size="lg" />
    </button>
    <Link to="/">
      <Glweems />
    </Link>
    <button type="button">
      <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
    </button>
  </Header>
);

export default Navbar;
