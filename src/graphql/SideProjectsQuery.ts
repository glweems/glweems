import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { Nodes, ImageFile } from '../declaration';

interface SideProject {
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

const useSideProjectsQuery = (): SideProject[] => {
  const {
    allSideprojectsYaml,
  }: { allSideprojectsYaml: Nodes<SideProject> } = useStaticQuery(graphql`
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
              fluid {
                ...GatsbyImageSharpFluid
              }
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
