import styled from 'styled-components';
import { navigate } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { animated, useTransition } from 'react-spring';
import { Container } from 'reactstrap';

const Dropdown = styled(animated.header)`
  z-index: 90;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em;
  background: ${props => props.theme.colors.dark};
  border-bottom: 2px solid ${props => props.theme.colors.green};
`;

const StyledLink = styled.div`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 4em 1em;
  align-items: center;
  color: ${props => props.theme.colors.muted};
  font-size: 18px;
  span {
    color: ${props => props.theme.colors.purple};
  }
  cursor: pointer;
`;
interface NavbarLink {
  path: string;
  icon: IconDefinition;
  text: string;
  toggleMenu(): void;
}

const NavbarLink = ({ path, icon, text, toggleMenu }: NavbarLink) => {
  const closeAndGo = () => {
    navigate(path);
    toggleMenu();
  };
  return (
    <StyledLink role="presentation" onClick={closeAndGo}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </StyledLink>
  );
};

interface MenuItem {
  text: string;
  path: string;
  icon: IconDefinition;
}

interface Menu {
  isMenu: boolean;
  items: MenuItem[];
  toggleMenu(): void;
}

const Navigation = ({ items, isMenu, toggleMenu }: Menu) => {
  return (
    <>
      {items.map(navItem => (
        <NavbarLink key={navItem.text} {...navItem} toggleMenu={toggleMenu} />
      ))}
    </>
  );
};

export default Navigation;
