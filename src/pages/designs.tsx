import React from 'react'
import Designs from '../components/Designs'
import { Container } from '../components/Common'
import { graphql } from 'gatsby'
import { mapDesignCovers } from '../utils/helpers'

export default ({ data: { allBehanceProjects, allFile } }) => {
  const designs = mapDesignCovers({ allBehanceProjects, allFile })
  return (
    <Container>
      <h1>Graphic Design Projects</h1>
      <Designs designs={designs} />
    </Container>
  )
}

export const DesignsPageQuery = graphql`
  query DesignsPageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        ...BlogPost
      }
    }
    allBehanceProjects(sort: { fields: stats___views, order: DESC }) {
      nodes {
        slug
        name
        description
        tags
        published_on
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
`
