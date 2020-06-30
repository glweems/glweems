import React from 'react';
import Nav from './Nav';
import Box from '../components/Common/Box';
import { GhostSVG } from '../components/Icons';

export default function Navbar() {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignContent="center"
    >
      <div>
        <GhostSVG />
      </div>
      <Nav flexDirection="row" />
    </Box>
  );
}
