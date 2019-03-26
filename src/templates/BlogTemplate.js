import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import 'prism-themes/themes/prism-atom-dark.css'
// import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css'
// import 'prism-themes/themes/prism-cb.css'
// import 'prism-themes/themes/prism-darcula.css'
// import 'prism-themes/themes/prism-duotone-dark.css'
// import 'prism-themes/themes/prism-duotone-earth.css'
// import 'prism-themes/themes/prism-duotone-forest.css'
// import 'prism-themes/themes/prism-duotone-sea.css'
// import 'prism-themes/themes/prism-duotone-space.css'
// import 'prism-themes/themes/prism-ghcolors.css'
// import 'prism-themes/themes/prism-hopscotch.css'
// import 'prism-themes/themes/prism-pojoaque.css'
// import 'prism-themes/themes/prism-xonokai.css'
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
  img {
    min-width: 740px;
    max-width: 100%;
    grid-column: 1/-1;
    margin: 0 auto;
  }
  .gatsby-highlight {
    width: 98%;
    margin: 0 auto;
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
