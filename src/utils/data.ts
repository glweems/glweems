import {
  faMediumM,
  faBehance,
  faLinkedinIn,
  faCodepen,
  faGithubAlt,
  IconDefinition,
  faReadme,
} from '@fortawesome/free-brands-svg-icons';
import { faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
  { text: 'Graphic Design', path: '/designs', icon: faPenNib },
  { text: 'Code Tutorials', path: '/posts', icon: faReadme },
];

export interface SocialMedia {
  name: string;
  link: string;
  icon: IconDefinition;
  color: string;
  colors: {
    light: string;
    dark: string;
  };
}

export const email: SocialMedia = {
  name: 'gwgraphicdesign@gmail.com',
  link: 'mailto:gwgraphicdesign@gmail.com',
  icon: faEnvelope,
  color: '#f7f7f7',
  colors: {
    light: '#f7f7f7',
    dark: '#333',
  },
};

export const socialMedia: SocialMedia[] = [
  {
    name: 'Github',
    link: 'https://github.com/glweems',
    icon: faGithubAlt,
    color: '#f7f7f7',
    colors: {
      light: '#f7f7f7',
      dark: '#333',
    },
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/glweems',
    icon: faLinkedinIn,
    color: '#0077B5',
    colors: {
      light: '#0077B5',
      dark: '#0077B5',
    },
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@glweems',
    icon: faMediumM,
    color: '#00ab6c',
    colors: {
      light: '#00ab6c',
      dark: '#00ab6c',
    },
  },
  {
    name: 'Behance',
    link: 'https://www.behance.net/glweems',
    icon: faBehance,
    color: '#1769ff',
    colors: {
      light: '#1769ff',
      dark: '#1769ff',
    },
  },
  {
    name: 'Codepen',
    link: 'https://codepen.io/glweems',
    icon: faCodepen,
    color: '#f7f7f7',
    colors: {
      light: '#f7f7f7',
      dark: '#333',
    },
  },
];

export default { menuItems, socialMedia, email };
