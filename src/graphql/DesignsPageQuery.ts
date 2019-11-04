import { useStaticQuery, graphql } from 'gatsby'
import { DesignsPageQuery } from '..'

const UseDesignsPageQuery = (): DesignsPageQuery =>
  useStaticQuery(graphql`
    query {
      allBehanceProjects {
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
  `)

export default UseDesignsPageQuery
