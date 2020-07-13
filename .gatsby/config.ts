import {
  faBehance,
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import path from 'path';
import packageJson from '../package.json';

const config = {
  defaultTitle: 'Glweems',
  logo: 'https://glweems.com/favicon/logo-48.png',
  author: packageJson.author,
  url: packageJson.homepage,
  legalName: 'Garrett Weems',
  defaultDescription: 'I am a Graphic Designer / Full Stack Web Developer.',
  googleDocResumeUrl:
    'https://docs.google.com/document/d/e/2PACX-1vQeU-cHFCX8Ec1YLAPTLh7RltaGOTtGNmEgkCqbQ6RfnD6rC8BrVN_cjntiYsUXgqq4RWlv_N3ic03P/pub',
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
  itemsPerPage: 8,
  links: [
    { path: '/blog', name: 'Blog' },
    { path: '/designs', name: 'Designs' },
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
