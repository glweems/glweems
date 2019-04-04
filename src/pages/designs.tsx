import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import BehanceProjects from '@/my-content'
import { Container } from 'elements'

const GraphicDesignPage = ({ data }) => (
  <Layout>
    <SEO title="Graphic Design" />
    <Container>
      <BehanceProjects edges={data.allBehanceProjects.edges} />
    </Container>
  </Layout>
)

GraphicDesignPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default GraphicDesignPage

export const GraphicDesignPageQuery = graphql`
  query {
    allBehanceProjects {
      edges {
        node {
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
