import {
  faBehanceSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
  faMedium,
  faGithub,
  faLinkedinIn,
  faMediumM,
  faBehance,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import packageJson from '../package.json';
import path from 'path';

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
      icon: faGithub,
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
      icon: faMediumM,
    },
    behance: {
      name: 'Behance',
      username: 'glweems',
      link: 'https://www.behance.net/glweems',
      icon: faBehance,
    },
    instagram: {
      name: 'Instagram',
      username: 'glweems',
      link: 'https://instagram.com/glweems',
      icon: faInstagram,
    },
  },
};

export const siteMetadata = {
  title: `Garrett Weems`,
  titleTemplate: `%s · Glweems`,
  description: `Full stack web developer / graphic designer.`,
  image: path.resolve(`../src/assets/ghost.png`),
  languageCode: `en`,
  countryCode: `US`,
  siteUrl: config.url,
  twitterHandle: config.contact.twitter,
  disqusShortName: config.disqusShortName,
};

export default config;
