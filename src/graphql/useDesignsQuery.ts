import { graphql, useStaticQuery } from 'gatsby';
import { UseDesignsQuery } from '../types/generated';

export default function useDesignsQuery() {
  const { projects, images } = useStaticQuery<UseDesignsQuery>(graphql`
    query UseDesigns {
      projects: allDesignsYaml {
        nodes {
          slug
          name
          description
          tags
        }
      }
      images: allFile(
        filter: { sourceInstanceName: { eq: "designs" }, name: { eq: "cover" } }
      ) {
        nodes {
          id
          name
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `);

  return projects.nodes.map((project) => {
    return {
      ...images.nodes.find((image) => image.relativeDirectory === project.slug),
      ...project,
    };
  });
}
