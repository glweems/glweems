// import original module declarations
import 'styled-components';

declare module '*.png' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'gatsby';
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

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
    lightColors: Colors;
    darkColors: Colors;
  }
}

interface LocalFile {
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

interface BehanceProject {
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

interface BehanceImage {
  id: string;
  sourceInstanceName: string;
  relativeDirectory: string;
  name: string;
  childImageSharp: {
    fluid: {};
  };
}

interface GithubRepository {
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
