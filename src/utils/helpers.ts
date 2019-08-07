import { BehanceProject, BehanceImage } from '../declaration';

export const truncate = (input: string, target: number = 10) =>
  input.length > target - 3 ? `${input.substring(0, target - 3)}...` : input;

export const filterProjectImages = (slug: string, nodes: BehanceImage[]) =>
  nodes.filter((node: BehanceImage) => (node.behanceProject === slug ? node : null));

export const mergedBehance = (projects: BehanceProject[], files: BehanceImage[]) =>
  projects.map((project: BehanceProject) => {
    const found: any = files.find((imageNode: { relativeDirectory: string }) =>
      imageNode.relativeDirectory.includes(project.slug),
    );
    return { ...project, ...found.childImageSharp };
  });

export default { mergedBehance };
