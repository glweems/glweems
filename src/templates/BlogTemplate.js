import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'

import styled from 'styled-components'

const BlogPost = styled.div`
  article {
    display: grid;
    grid-template-columns: 1fr 740px 1fr;
  }
  article > * {
    grid-column: 2;
  }
  article > figure {
    grid-column: 1 / -1;
    margin: 20px 0;
  }
  article {
    display: grid;
    grid-template-columns: 1fr 1fr 10px 740px 10px 1fr 1fr;
  }
  article > * {
    grid-column: 4;
  }

  article > figure {
    grid-column: 2 / -2;
    margin: 20px 0;
  }
  article > blockquote {
    grid-column: 3 / 5;
    padding-left: 10px;
    color: #666;
    border-left: 3px solid black;
  }
`

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  return (
    <Layout>
      <BlogPost>
        <SEO title={title} />
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPost>
    </Layout>
  )
}
export const pageQuery = graphql`
  query SinglePost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
export default Template
