import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import 'prism-themes/themes/prism-atom-dark.css'
import { Container } from 'elements'
import styled from 'styled-components'

const BlogPost = styled.div`
  max-width: 100%;
`

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
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
      }
    }
  }
`

BlogTemplate.propTypes = {
  data: PropTypes.object,
}
export default BlogTemplate
