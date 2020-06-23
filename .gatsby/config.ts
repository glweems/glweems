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
    medium: 'https://medium.com/@glweems'
  },
  googleAnalyticsID: 'UA-140456624-1',
  themeColor: '#f8d58c',
  backgroundColor: '#f8d58c',
  siteRss: '/rss.xml',
  disqusShortName: 'https-glweems-com',
  contact: {
    email: 'gwgraphicdeesign@gmail.com',
    twitter: 'garrettlweems'
  },
  pathPrefix: '/',
  copyright: '© All rights reserved.',
  postsPerPage: 4,
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
    soundcloud: ''
  }
};

export default config;
