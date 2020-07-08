import { Link } from 'gatsby';
import React from 'react';
import Box from '../components/Common/Box';
import { GhostSVG, SocialIcons } from '../components/Icons';
import ToggleThemeSwitch from '../components/ToggleThemeSwitch';
import Nav from './Nav';

export default function SideMenu() {
  return (
    <React.Fragment>
      <div>
        <GhostSVG />
      </div>
      <Link to="/">Garrett Weems</Link>
      <p>I'm a full-stack web developer.</p>
      <p>I specialize in javascript / react.js web developement.</p>

      <Nav />

      <Box>
        <SocialIcons />
        <ToggleThemeSwitch />
      </Box>
    </React.Fragment>
  );
}
