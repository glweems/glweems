import { graphql, useStaticQuery } from 'gatsby';
import { DesignsPageQuery } from '../types/generated';
const UseDesignsPageQuery = () =>
  useStaticQuery<DesignsPageQuery>(graphql`
    query DesignsPage {
      allBehanceProjects: allDesignsYaml {
        nodes {
          slug
          name
          description
          tags
        }
      }
      behanceImages: allFile(
        filter: {
          relativeDirectory: { regex: "/gatsby-source-behance-images/" }
          name: { eq: "cover" }
        }
      ) {
        nodes {
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

export default UseDesignsPageQuery;
