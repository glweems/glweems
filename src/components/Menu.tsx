import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { animated, useTransition } from 'react-spring';
import { Container } from 'reactstrap';

interface MenuItem {
  text: string;
  path: string;
  icon: IconDefinition;
}
interface MenuProps {
  isMenu: boolean;
  items: MenuItem[];
  setIsMenu: any;
}

const Pages = styled(animated.header)`
  z-index: 90;
  width: 100%;
  padding: 1em;
  background: ${props => props.theme.lightColors.dark};
  border-bottom: 2px solid ${props => props.theme.colors.green};
  display: flex;
  flex-direction: column;
`;

interface NavbarLink {
  path: string;
  icon: IconDefinition;
  text: string;
  setIsMenu: any;
}

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
`;

const NavbarLink = ({ path, icon, text, setIsMenu }: NavbarLink) => {
  const closeAndGo = () => {
    setIsMenu(false);
    navigate(path);
  };
  return (
    <StyledLink role="presentation" onClick={closeAndGo}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </StyledLink>
  );
};

const Menu = ({ items, isMenu, setIsMenu }: MenuProps) => {
  const transitions = useTransition(isMenu, null, {
    from: { opacity: 0, transform: 'translateY(-8em)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-8em)' },
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Pages key={key} style={props}>
              <Container>
                {items.map(navItem => (
                  <NavbarLink key={navItem.text} {...navItem} setIsMenu={setIsMenu} />
                ))}
              </Container>
            </Pages>
          ),
      )}
    </>
  );
};

export default Menu;
