import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import { Container } from 'src/Styled'
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
  max-width: 100%;
  * {
    max-width: 100%;
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
        <Container>
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
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
