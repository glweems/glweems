import {
  faBehanceSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import packageJson from '../package.json';

const config = {
  defaultTitle: 'Glweems',
  logo: 'https://glweems.com/favicon/logo-48.png',
  author: packageJson.author,
  url: packageJson.homepage,
  legalName: 'Garrett Weems',
  defaultDescription: 'I am a Graphic Designer / Full Stack Web Developer.',
  socialLinks: {
    github: 'https://github.com/glweeems',
    linkedin: 'https://www.linkedin.com/in/glweems',
    instagram: 'https://instagram.com/glweems',
    behance: 'https://www.behance.net/glweems',
    codepen: 'https://codepen.io/glweems',
    medium: 'https://medium.com/@glweems',
  },
  googleAnalyticsID: 'UA-140456624-1',
  themeColor: '#f8d58c',
  backgroundColor: '#f8d58c',
  siteRss: '/rss.xml',
  disqusShortName: 'https-glweems-com',
  contact: {
    email: 'gwgraphicdeesign@gmail.com',
    twitter: 'garrettlweems',
  },
  pathPrefix: '/',
  copyright: '© All rights reserved.',
  itemsPerPage: 4,
  links: [
    { path: '/blog', name: 'Articles' },
    { path: '/designs', name: 'Designs' },
    // { path: '/projects', name: 'Projects' },
    { path: '/about', name: 'About' },
    { path: '/resume', name: 'Resume' },
  ],
  accounts: {
    email: {
      name: 'Email',
      username: 'gwgraphicdesign@gmail.com',
      link: 'mailto:gwgraphicdesign@gmail.com',
      icon: faEnvelope,
    },
    github: {
      name: 'Github',
      username: 'glweems',
      link: 'https://github.com/glweems',
      icon: faGithubSquare,
    },
    linkedin: {
      name: 'LinkedIn',
      username: 'glweems',
      link: 'https://www.linkedin.com/in/glweems',
      icon: faLinkedin,
    },
    medium: {
      name: 'Medium',
      username: 'glweems',
      link: 'https://medium.com/@glweems',
      icon: faMedium,
    },
    behance: {
      name: 'Behance',
      username: 'glweems',
      link: 'https://www.behance.net/glweems',
      icon: faBehanceSquare,
    },
    instagram: {
      name: 'Instagram',
      username: 'glweems',
      link: 'https://instagram.com/glweems',
      icon: faInstagramSquare,
    },
  },
  contacts: {
    email: '',
    facebook: '#',
    telegram: '#',
    twitter: '#',
    github: '#',
    rss: '',
    vkontakte: '',
    linkedin: '#',
    instagram: '#',
    line: '',
    gitlab: '',
    weibo: '',
    codepen: '',
    youtube: '',
    soundcloud: '',
  },
};

export default config;