import {
  faBehance,
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import path from 'path'
import packageJson from '../package.json'

const config = {
  defaultTitle: 'Glweems',
  logo: 'https://glweems.com/favicon/logo-48.png',
  author: packageJson.author,
  url: packageJson.homepage,
  legalName: 'Garrett Weems',
  defaultDescription: 'I am a Graphic Designer / Full Stack Web Developer.',
  googleDocResumeUrl:
    'https://docs.google.com/document/d/e/2PACX-1vSHaghePnqrnkCLxr8kQhNmYo7IrpktVqEK9_URiuJwln_6_f0kwtjI1IeVKU4yeSKc9YQj1Jace60C/pub',
  socialLinks: {
    Github: 'https://github.com/glweeems',
    LinkedIn: 'https://www.linkedin.com/in/glweems',
    Instagram: 'https://instagram.com/glweems',
    Behance: 'https://www.behance.net/glweems',
    CodePen: 'https://codepen.io/glweems',
    Medium: 'https://medium.com/@glweems',
  },
  googleAnalyticsID: 'UA-140456624-1',
  themeColor: '#f8d58c',
  backgroundColor: '#f8d58c',
  siteRss: '/rss.xml',
  disqusShortName: 'glweems-dot-com',
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
    // email: {
    //   name: 'Email',
    //   username: 'gwgraphicdesign@gmail.com',
    //   link: 'mailto:gwgraphicdesign@gmail.com',
    //   icon: faEnvelope,
    // },
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
}

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
}

export default config
