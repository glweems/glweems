/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useStaticQuery, graphql } from 'gatsby';
import { DesignsQuery, BehanceProject, ImageFile } from '..';

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

  const findDesignCover = (design: BehanceProject): ImageFile | undefined =>
    allFile.nodes.find(file => file.relativeDirectory.includes(design.slug));

  const designs = allBehanceProjects.nodes.map(design => {
    if (findDesignCover(design)) {
      return {
        ...design,
        cover: findDesignCover(design),
      };
    }
  });

  return designs;
};

export default UseDesignsQuery;
