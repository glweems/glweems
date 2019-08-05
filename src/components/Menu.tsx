import styled from 'styled-components';
import { Link } from 'gatsby';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { animated, useTransition } from 'react-spring';
import SocialMediaIcons from './SocialMedia';

interface MenuItem {
  text: string;
  path: string;
  icon?: IconDefinition;
}
interface MenuProps {
  isMenu?: boolean;
  items: MenuItem[];
}

const Toggle = styled.div``;

const Pages = styled(Container)`
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const SocialMedia = styled.div`
  height: fit-content;
`;

const Navigation = styled(animated.header)`
  grid-area: Menu;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 3em auto auto;
  grid-template-areas: 'Toggle' 'Pages' 'SocialMedia';

  height: 100vh;
  justify-items: space-between;
  color: ${({ theme }: StyleProps) => theme.light};
  background: ${({ theme }: StyleProps) => theme.bg};
  ${Toggle} {
    grid-area: Toggle;
  }

  ${Pages} {
    grid-area: Pages;
  }

  ${SocialMedia} {
    grid-area: SocialMedia;
  }
`;

const Menu = ({ items, isMenu }: MenuProps): React.ReactNode | null | any => {
  const transitions = useTransition(isMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Navigation key={key} style={props}>
          <Toggle>
            <button type="button">clicky</button>
          </Toggle>
          <Pages rows={items.length}>
            {items.map(({ path, icon, text }) => (
              <Link key={path} to={path}>
                {icon ? <FontAwesomeIcon icon={icon} /> : null}
                {text}
              </Link>
            ))}
          </Pages>
          <SocialMedia>
            <Container>
              <SocialMediaIcons />
            </Container>
          </SocialMedia>
        </Navigation>
      ),
  );
};

export default Menu;
