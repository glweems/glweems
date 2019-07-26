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

interface IndexPage {
  data: IndexPageData;
}
interface IndexPageData {
  github: Github;
  allFile: AllFile;
  allBehanceProjects: AllBehanceProjects;
}
interface Github {
  viewer: Viewer;
}
interface Viewer {
  pinnedItems: PinnedItems;
}
interface PinnedItems {
  nodes: PinnedItem[];
}
interface PinnedItem {
  id: string;
  name: string;
  url: string;
  updatedAt: string;
  description: string;
  homepageUrl: string;
  languages: Languages;
}
interface Languages {
  nodes?: (NodesEntity1)[] | null;
}
interface NodesEntity1 {
  color: string;
  id: string;
  name: string;
}
interface AllFile {
  nodes: TutorialFileNode[];
}
interface EdgesEntity {
  node: Node;
}
interface TutorialFileNode {
  gitRemote: GitRemote;
  childMarkdownRemark?: ChildMarkdownRemark | null;
}
interface GitRemote {
  name: string;
  webLink: string;
}
interface ChildMarkdownRemark {
  html: string;
  frontmatter: Frontmatter;
}
interface Frontmatter {
  tags?: (string)[] | null;
  title: string;
}
interface AllBehanceProjects {
  edges: BehanceProjectNode[];
}
interface BehanceProjectNode {
  node: BehanceProject;
}
interface BehanceProject {
  id: string;
  name: string;
  slug: string;
  description: string;
  covers: Covers;
  tags?: (string)[] | null;
}
interface Covers {
  size_max_808: string;
}
