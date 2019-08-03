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

interface IndexPageQuery {
  markdownFiles: {
    nodes: {
      id: string;
      sourceInstanceName: string;
      childMarkdownRemark: {
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
    }[];
  };
  behanceImages: {
    nodes: {
      id: string;
      sourceInstanceName: string;
      relativeDirectory: string;
      name: string;
      childImageSharp: {
        fluid: {};
      };
    }[];
  };
  github: {
    viewer: {
      pinnedItems: {
        nodes: {
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
        }[];
      };
    };
  };
  allBehanceProjects: {
    nodes: {
      id: string;
      name: string;
      slug: string;
      description: string;
      covers: {
        size_max_808: string;
      };
      tags: string[];
    }[];
  };
}
