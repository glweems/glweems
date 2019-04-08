import { Container } from 'elements'
import Layout from '@/layout'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const BlogPost = styled.div`
  max-width: 100%;
`

const BlogTemplate = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark

  return (
    <Layout>
      <BlogPost>
        <SEO title={title} />
        <Container>
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </BlogPost>
      <hr />
      {/* <Related /> */}
    </Layout>
  )
}
export const pageQuery = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            path
            date
            thumbnail
            tags
          }
        }
      }
    }
  }
`

BlogTemplate.propTypes = {
  data: PropTypes.object,
}
export default BlogTemplate
