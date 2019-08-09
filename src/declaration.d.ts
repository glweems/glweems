// import original module declarations
import 'styled-components';
import GatsbyImage from 'gatsby-image';

declare module 'gatsby';
declare module 'react-github-calendar';
declare module 'gatsby-image';

interface Colors {
  light: string;
  dark: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  purple: string;
  mint: string;
  muted: string;
  bg: string;
}

export interface Website {
  name: string;
  slug: string;
  description: string;
  url: string;
  repo: string;
  tags: string[];
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
    lightColors: Colors;
    darkColors: Colors;
  }
}

export interface Fixed {
  base64: string;
  tracedSVG: string;
  aspectRatio: string;
  width: string;
  height: string;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  originalName: string;
}

export interface Fluid {
  base64: string;
  tracedSVG: string;
  aspectRatio: string;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes: string;
  originalImg: string;
  originalName: string;
  presentationWidth: string;
  presentationHeight: string;
}

export interface ImageFile {
  id: string;
  name: string;
  relativeDirectory: string;
  childImageSharp: {
    fluid: Fluid;
    fixed: Fixed;
  };
}

export interface Nodes<T> {
  nodes: T[];
}

export interface MarkdownRemark {
  id: string;
  sourceInstanceName: string;
  childMarkdownRemark: {
    excerpt: string;
    fileAbsolutePath: string;
    frontmatter: {
      thumbnail: {
        childImageSharp: GatsbyImage;
      };
      title: string;
      tags: string[];
      path: string;
    };
  };
}

export interface BehanceProject {
  id: string;
  name: string;
  description: string;
  slug: string;
  published: number;
  created: number;
  tags: string[];
  tools: {
    title: string;
    synonym: {
      icon_url: string;
    }[];
    areas: string[];
  };
}

export interface BehanceImage {
  id: string;
  sourceInstanceName: string;
  relativeDirectory: string;
  name: string;
  childImageSharp: {
    fluid: {};
  };
}

export interface GithubRepository {
  id: string;
  name: string;
  url: string;
  updatedAt: string;
  description: string;
  homepageUrl: string;
  languages: {
    nodes: {
      color: string;
      id: string;
      name: string;
    }[];
  };
}
