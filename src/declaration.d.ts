// import original module declarations
import 'styled-components';

declare module 'gatsby';
declare module 'gatsby-image';
declare module 'react-github-calendar';

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

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
    lightColors: Colors;
    darkColors: Colors;
  }
}

export interface LocalFile {
  id: string;
  name: string;
  childImageSharp: {
    fluid: {};
  };
}

export interface GQLNodes<T> {
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
        childImageSharp: {
          fluid: {};
        };
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
  behanceProject: string;
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
