import { useStaticQuery, graphql } from 'gatsby';
import { SideProjectsQuery } from '../types/generated';

const useSideProjectsQuery = () => {
  const { allSideprojectsYaml } = useStaticQuery<SideProjectsQuery>(graphql`
    query SideProjects {
      allSideprojectsYaml {
        nodes {
          id
          title
          link
          github
          description
          image {
            childImageSharp {
              ...FluidImage
            }
          }
          tags
        }
      }
    }
  `);
  return allSideprojectsYaml.nodes;
};

export default useSideProjectsQuery;
