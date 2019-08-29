import { useStaticQuery, graphql } from 'gatsby';
import { Design, DesignsQuery, BehanceProject, ImageFile } from '..';

const UseDesignsQuery = (): Design[] => {
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

  const findDesignCover = (design: BehanceProject): ImageFile | any =>
    allFile.nodes.find(file => file.relativeDirectory.includes(design.slug));

  const designs = allBehanceProjects.nodes.map(design => ({
    ...design,
    cover: findDesignCover(design),
  }));

  return designs;
};

export default UseDesignsQuery;
