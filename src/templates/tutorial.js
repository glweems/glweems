/* eslint-disable react/no-multi-comp */
import { Article, Container } from 'elements'
import AddComment from '@/forms/comment'
import Comments from '@/comments'
import Layout from '@/containers/layout'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const BlogPost = styled.div`
  max-width: 100%;
  padding: 1rem;
`

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html, fields } = markdownRemark
  const { slug } = fields

  return (
    <Layout>
      <BlogPost>
        <SEO title={title} />
        <Container>
          <Article dangerouslySetInnerHTML={{ __html: html }} />
          <AddComment
            post={slug.replace('/tutorials/', '')}
            url="/tutorials/comments"
          />
          <Comments
            url={`/tutorials/comments/${slug.replace('/tutorials/', '')}`}
          />
        </Container>
      </BlogPost>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
          fields {
            slug
          }
          frontmatter {
            title
            date
            thumbnail {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
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
