export const mergedBehance = (projects: BehanceProject[], files: BehanceImage[]) =>
  projects.map((project: BehanceProject) => {
    const found: any = files.find((imageNode: { relativeDirectory: string }) =>
      imageNode.relativeDirectory.includes(project.slug),
    );
    return { ...project, ...found.childImageSharp };
  });

export default { mergedBehance };
