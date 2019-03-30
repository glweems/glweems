import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import { Card, CardGrid } from '@/card'
import { Container } from 'src/Styled'
import { MyTuts } from '@/my-content'

export default class BlogPosts extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({ edges: PropTypes.array }),
    }),
  }

  render() {
    const {
      props: {
        data: {
          allMarkdownRemark: { edges },
        },
      },
    } = this

    return (
      <Layout>
        <SEO title="posts" />
        <CardGrid>
          <MyTuts edges={edges} />
        </CardGrid>
      </Layout>
    )
  }
}

export const GraphicDesignPageQuery = graphql`
  query allBlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            subtitle
            thumbnail
          }
          excerpt
          html
          timeToRead
        }
      }
    }
  }
`
