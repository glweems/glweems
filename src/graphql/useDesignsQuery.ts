import { graphql, useStaticQuery } from 'gatsby';
import { DesignsQuery } from './_types/DesignsQuery';

export default function useDesignsQuery() {
  const { projects, images } = useStaticQuery<DesignsQuery>(graphql`
    query DesignsQuery {
      projects: allDesignsYaml {
        nodes {
          slug
          name
          description
          tags
        }
      }
      images: allFile(filter: { sourceInstanceName: { eq: "designs" }, name: { eq: "cover" } }) {
        nodes {
          id
          name
          relativeDirectory
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              aspectRatio
              sizes
              presentationWidth
              presentationHeight
              src
              srcSet
            }
          }
        }
      }
    }
  `);

  return projects.nodes.map(project => {
    return { ...project, ...images.nodes.find(image => image.relativeDirectory === project.slug) };
  });
}
