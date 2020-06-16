import { useStaticQuery, graphql } from 'gatsby';
import { SideProject, AllSideprojectsYaml } from '..';

const useSideProjectsQuery = (): SideProject[] => {
  const { allSideprojectsYaml }: AllSideprojectsYaml = useStaticQuery(graphql`
    query WebsitesQuery {
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
