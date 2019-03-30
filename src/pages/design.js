import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import { CardGrid } from '@/card'
import { BehanceProjects } from '@/my-content'

export default class GraphicDesignPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allBehanceProjects: PropTypes.shape({ edges: PropTypes.array }),
    }),
  }

  render() {
    const {
      data: {
        allBehanceProjects: { edges },
      },
    } = this.props
    return (
      <Layout>
        <SEO title="Graphic Design" />
        <CardGrid>
          <BehanceProjects edges={edges} />
        </CardGrid>
      </Layout>
    )
  }
}

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
            size_808
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
