import * as Icon from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import axios from 'axios';

export const sidebarLinks = [
  { name: `About`, to: `/about` },
  { name: `Tutorials`, to: `/tutorials` },
  { name: `Graphic Design`, to: `/designs` },
];

export const socialMediaAccounts = [
  {
    name: `GitHub`,
    username: `glweems`,
    link: `https://github.com/glweems`,
    SvgIcon: () => <FontAwesomeIcon icon={Icon.faGithub} />,
  },
  {
    name: `Medium`,
    username: `glweems`,
    link: `https://medium.com/@glweems`,
    SvgIcon: () => <FontAwesomeIcon icon={Icon.faMedium} />,
  },
  {
    name: `Behance`,
    username: `glweems`,
    link: `https://behance.net/glweems`,
    SvgIcon: () => <FontAwesomeIcon icon={Icon.faBehance} />,
  },
  {
    name: `CodePen`,
    link: `https://codepen.io/glweems`,
    SvgIcon: () => <FontAwesomeIcon icon={Icon.faCodepen} />,
  },
];

export const glweems = axios.create({
  baseURL:
    process.env.NODE_ENV === `development`
      ? `http://localhost:5000`
      : `https://api.glweems.com`,
});
