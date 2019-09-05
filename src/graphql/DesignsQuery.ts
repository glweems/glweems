/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useStaticQuery, graphql } from 'gatsby';
import { DesignsQuery, BehanceProject, Design } from '..';

const UseDesignsQuery = () => {
  const { allBehanceProjects, allFile }: DesignsQuery = useStaticQuery(graphql`
    query DesignsQuery {
      allBehanceProjects {
        nodes {
          slug
          name
          description
          tags
        }
      }
      allFile(
        filter: {
          relativeDirectory: { regex: "/gatsby-source-behance-images/" }
          name: { eq: "cover" }
        }
      ) {
        nodes {
          id
          name
          relativeDirectory
          childImageSharp {
            ...FluidImage
          }
        }
      }
    }
  `);

  const findDesignCover = (design: BehanceProject): any => {
    const image = allFile.nodes.find(file =>
      file.relativeDirectory.includes(design.slug),
    );
    if (image) return image;
  };

  let designs: Design[] = [];

  allBehanceProjects.nodes.forEach(design => {
    if (findDesignCover(design)) {
      designs.push({
        ...design,
        cover: findDesignCover(design),
      });
    }
  });

  return designs;
};

export default UseDesignsQuery;
