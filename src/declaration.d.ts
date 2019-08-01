// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module 'package-without-declarations';

// And to shim assets, use (one file extension per `declare`):
// declare module '*.png';
declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@microlink/react';
declare module 'gatsby';
declare module 'gatsby-image';
declare module 'react-reveal';
declare module 'react-burger-menu';

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
