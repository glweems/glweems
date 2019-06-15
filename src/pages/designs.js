import { BehanceProjects } from '@/my-content'
import { Container } from 'elements'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'
import { graphql } from 'gatsby'

const GraphicDesignPage = ({ data }) => (
  <>
    <SEO title="Graphic Design" />
    <Container>
      <BehanceProjects edges={data.allBehanceProjects.edges} />
    </Container>
  </>
)

GraphicDesignPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GraphicDesignPage

export const GraphicDesignPageQuery = graphql`
  query {
    allBehanceProjects {
      edges {
        node {
          id
          name
          created
          url
          areas
          tags
          description
          fields {
            slug
          }
          tools {
            id
          }
          covers {
            size_max_808
          }
          stats {
            views
            appreciations
            comments
          }
        }
      }
    }
  }
`
