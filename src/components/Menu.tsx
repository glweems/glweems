import styled from 'styled-components';
import { navigate } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { animated, useTransition } from 'react-spring';
import { Container } from 'reactstrap';

const Dropdown = styled(animated.header)`
  z-index: 90;
  width: 100%;
  padding: 1em;
  background: ${props => props.theme.colors.dark};
  border-bottom: 2px solid ${props => props.theme.colors.green};
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 4em 1em;
  align-items: center;
  color: ${props => props.theme.colors.muted};
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

const Menu = ({ items, isMenu, toggleMenu }: Menu) => {
  const transitions = useTransition(isMenu, null, {
    from: { transform: 'translateY(-8em)', height: '1em' },
    enter: { transform: 'translateY(0)', height: '100vh' },
    leave: { transform: 'translateY(-8em)', height: '1em' },
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Dropdown key={key} style={props}>
              <Container>
                {items.map(navItem => (
                  <NavbarLink key={navItem.text} {...navItem} toggleMenu={toggleMenu} />
                ))}
              </Container>
            </Dropdown>
          ),
      )}
    </>
  );
};

export default Menu;
