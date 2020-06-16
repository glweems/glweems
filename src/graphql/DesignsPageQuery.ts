import { graphql, useStaticQuery } from 'gatsby';
import { DesignsPageQuery } from './_types/DesignsPageQuery';

const UseDesignsPageQuery = () =>
  useStaticQuery<DesignsPageQuery>(graphql`
    query DesignsPageQuery {
      allBehanceProjects: allDesignsYaml {
        nodes {
          slug
          name
          description
          tags
        }
      }
      behanceImages: allFile(
        filter: { relativeDirectory: { regex: "/gatsby-source-behance-images/" }, name: { eq: "cover" } }
      ) {
        nodes {
          relativeDirectory
          childImageSharp {
            ...FluidImage
          }
        }
      }
    }
  `);

export default UseDesignsPageQuery;
