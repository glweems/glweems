declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@microlink/react';
declare module 'gatsby';
declare module 'gatsby-image';
declare module 'react-reveal';
declare module 'react-burger-menu';
declare module 'typography-theme-grand-view';
declare module 'lodash-es/clamp';

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

interface StyleProps {
  theme: Colors;
}

interface LocalFile {
  id: string;
  name: string;
  childImageSharp: {
    fluid: {};
  };
}

interface GQLNodes<T> {
  nodes: T[];
}

interface MarkdownRemark {
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
