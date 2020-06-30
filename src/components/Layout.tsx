import { Link } from 'gatsby';
import React from 'react';
import config from '../../.gatsby/config';
import Box from './Common/Box';
import { GhostSVG, SocialIcons } from './Icons';
import ToggleThemeSwitch from './ToggleThemeSwitch';

function SideMenu() {
  return (
    <React.Fragment>
      <div>
        <GhostSVG />
      </div>
      <Link to="/">Garrett Weems</Link>
      <p>I'm a full-stack web developer.</p>
      <p>I specialize in javascript / react.js web developement.</p>

      <nav
        css={`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-content: flex-start;
        `}
      >
        {config.links.map((link) => (
          <Link key={link.name} to={link.path} className="button">
            {link.name}
          </Link>
        ))}
      </nav>

      <Box>
        <SocialIcons />
        <ToggleThemeSwitch />
      </Box>
    </React.Fragment>
  );
}
