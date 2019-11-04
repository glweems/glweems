/* eslint-disable consistent-return */
import { useStaticQuery, graphql } from 'gatsby'
import { DesignsQuery } from '..'
import { mapDesignCovers } from '../utils/helpers'

export const useDesigns = () => {
  const { allBehanceProjects, allFile }: DesignsQuery = useStaticQuery(graphql`
    query DesignsQuery {
      allBehanceProjects(sort: { fields: stats___views, order: DESC }, limit: 4) {
        nodes {
          slug
          name
          description
          tags
        }
      }
      allFile(filter: { relativeDirectory: { regex: "/gatsby-source-behance-images/" }, name: { eq: "cover" } }) {
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
  `)

  return mapDesignCovers({ allBehanceProjects, allFile })
}

export default useDesigns
