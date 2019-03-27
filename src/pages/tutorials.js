import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import BlogPostPreview, { CardGrid } from '@/blog-post-preview'
import { Container } from 'src/Styled'

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

    const Posts = () =>
      edges.map((edge, index) => {
        const {
          node: {
            excerpt,
            frontmatter: { title, subtitle, path, thumbnail },
          },
        } = edge
        return (
          <BlogPostPreview
            key={index}
            title={excerpt}
            subtitle={excerpt}
            link={path}
            img={thumbnail}
          />
        )
      })

    return (
      <Layout>
        <SEO title="posts" />
        <Container>
          <Posts />
        </Container>
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
            git
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
