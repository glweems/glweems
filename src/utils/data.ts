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
  { text: 'Code Tutorials', path: '/tutorials', icon: faReadme },
];

interface IconData {
  name: string;
  link: string;
  icon: IconDefinition;
  color: string;
}

export const email: IconData = {
  name: 'gwgraphicdesign@gmail.com',
  link: 'mailto:gwgraphicdesign@gmail.com',
  icon: faEnvelope,
  color: '#333',
};

export const socialMedia: IconData[] = [
  {
    name: 'Github',
    link: 'https://github.com/glweems',
    icon: faGithubAlt,
    color: '#333',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/glweems',
    icon: faLinkedinIn,
    color: '#0077B5',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@glweems',
    icon: faMediumM,
    color: '#00ab6c',
  },
  {
    name: 'Behance',
    link: 'https://www.behance.net/glweems',
    icon: faBehance,
    color: '#1769ff',
  },
  {
    name: 'Codepen',
    link: 'https://codepen.io/glweems',
    icon: faCodepen,
    color: '#ff3c41',
  },
];

export default { menuItems, socialMedia, email };
