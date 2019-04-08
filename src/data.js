import React from 'react'

import {
  faGithub,
  faMedium,
  faBehance,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const sidebarLinks = [
  { name: 'About', to: '/about' },
  { name: 'Tutorials', to: '/tutorials' },
  { name: 'Graphic Design', to: '/designs' },
]

export const socialMediaAccounts = [
  {
    name: 'GitHub',
    username: 'glweems',
    link: 'https://github.com/glweems',
    SvgIcon: () => <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: 'Medium',
    username: 'glweems',
    link: 'https://medium.com/@glweems',
    SvgIcon: () => <FontAwesomeIcon icon={faMedium} />,
  },
  {
    name: 'Behance',
    username: 'glweems',
    link: 'https://behance.net/glweems',
    SvgIcon: () => <FontAwesomeIcon icon={faBehance} />,
  },
  {
    name: 'CodePen',
    link: 'https://codepen.io/glweems',
    SvgIcon: () => <FontAwesomeIcon icon={faCodepen} />,
  },
]
