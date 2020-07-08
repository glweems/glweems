import React from 'react';
import config from '../../.gatsby/config';
import Box, { BoxProps } from '../components/Common/Box';
import Link from '../components/Common/Link';

const Nav = (props: Omit<BoxProps, 'as'>) => {
  return (
    <Box as="nav" {...(props as any)}>
      {config.links.map((link) => (
        <Link key={link.name} to={link.path} className="button">
          {link.name}
        </Link>
      ))}
    </Box>
  );
};

Nav.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
};

export default Nav;
