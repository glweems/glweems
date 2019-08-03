import styled from 'styled-components';
import { Link } from 'gatsby';

import React from 'react';
import { IconProp, FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, animated, useSpring } from 'react-spring';

const Navigation = styled(animated.nav)`
  grid-area: Menu;
  display: grid;
  grid-template-columns: 1fr;
  color: ${({ theme }: StyleProps) => theme.light};
  background: ${({ theme }: StyleProps) => theme.dark};
`;

interface MenuProps {
  isMenu?: boolean;
  items: {
    text?: string;
    path?: string;
    icon?: IconProp;
  }[];
}

const Menu = ({ items, isMenu }: MenuProps): React.ReactNode | null | any => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const transitions = useTransition(isMenu, null, {
    from: { opacity: 0, transform: 'translateY(-10%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(10%)' },
  });

  return (
    !isMenu || (
      <Navigation style={props}>
        {items.map(({ path, icon, text }) => (
          <Link key={path} to={path}>
            {icon ? <FontAwesomeIcon icon={icon} /> : null}
            {text}
          </Link>
        ))}
      </Navigation>
    )
  );
};

export default Menu;
