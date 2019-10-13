import { faMediumM, faBehance, faReadme, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Account } from '../index'

export const menuItems = [
  { text: 'Graphic Design', path: '/designs', icon: faPenNib },
  { text: 'Code Tutorials', path: '/blog', icon: faReadme }
]

interface Accounts {
  email: Account
  github: Account
  linkedin: Account
  medium: Account
  behance: Account
  instagram: Account
}

export const accounts: Accounts = {
  email: {
    name: 'Email',
    username: 'gwgraphicdesign@gmail.com',
    link: 'mailto:gwgraphicdesign@gmail.com',
    icon: faEnvelope,
    colors: {
      light: '#f7f7f7',
      dark: '#333333'
    }
  },
  github: {
    name: 'Github',
    username: 'glweems',
    link: 'https://github.com/glweems',
    icon: faGithub,
    colors: {
      light: '#333333',
      dark: '#333333'
    }
  },
  linkedin: {
    name: 'LinkedIn',
    username: 'glweems',
    link: 'https://www.linkedin.com/in/glweems',
    icon: faLinkedin,
    colors: {
      light: '#0077B5',
      dark: '#0077B5'
    }
  },
  medium: {
    name: 'Medium',
    username: 'glweems',
    link: 'https://medium.com/@glweems',
    icon: faMediumM,
    colors: {
      light: '#00ab6c',
      dark: '#00ab6c'
    }
  },
  behance: {
    name: 'Behance',
    username: 'glweems',
    link: 'https://www.behance.net/glweems',
    icon: faBehance,
    colors: {
      light: '#1769ff',
      dark: '#1769ff'
    }
  },
  instagram: {
    name: 'Instagram',
    username: 'glweems',
    link: 'https://instagram.com/glweems',
    icon: faInstagram,
    colors: {
      light: '#5851DB',
      dark: '#5851DB'
    }
  }
}

export default { menuItems, accounts }
