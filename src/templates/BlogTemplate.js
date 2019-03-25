import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import 'prism-themes/themes/prism-atom-dark.css'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  return (
    <Layout>
      <SEO title={title} />
      <article dangerouslySetInnerHTML={{ __html: html }} />
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
