import { FluidObject, FixedObject } from 'gatsby-image';

export interface Nodes<T> {
  nodes: T[];
}

export interface SideProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  link: string;
  repo: string;
  tags: string[];
  image: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface AllSideprojectsYaml {
  allSideprojectsYaml: Nodes<SideProject>;
}

export interface Frontmatter {
  id: number;
  date(formatString: 'MMMM DD, YYYY'): Date;
  path: string;
  tags: string[];
  title: string;
  subtitle: string;
  next: string;
  thumbnail: {
    id: string;
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface MarkdownRemark {
  id: string;
  timeToRead: number;
  excerpt: string;
  htmlAst: object;
  frontmatter: Frontmatter;
}

export interface PostsQuery {
  allMarkdownRemark: Nodes<MarkdownRemark>;
}

export type Child =
  | Element
  | Element[]
  | React.ReactElement
  | React.ReactFragment
  | React.ReactChildren
  | string;

export interface Colors {
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

export interface ImageFile {
  id: string;
  name: string;
  relativeDirectory: string;
  childImageSharp: {
    fluid: FluidObject;
    fixed: FixedObject;
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

export interface DesignsQuery {
  allBehanceProjects: Nodes<BehanceProject>;
  allFile: Nodes<ImageFile>;
}

export interface Design extends BehanceProject {
  cover: { childImageSharp: { fluid: FluidObject } };
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

export interface DesignsPageQuery {
  allBehanceProjects: Nodes<BehanceProject>;
  behanceImages: Nodes<BehanceImage>;
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

export interface SeoQuery {
  site: {
    siteMetadata: {
      defaultTitle: string;
      titleTemplate: string;
      defaultDescription: string;
      url: string;
      image: string;
      defaultImage: string;
    };
  };
}