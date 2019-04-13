import { Container } from 'elements'
import Layout from '@/containers/layout'
import MyTuts from '@/MyTuts'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'
import { graphql } from 'gatsby'

const TutorialsPage = ({ data }) => (
  <Layout>
    <SEO title='Tutorials' />
    <Container>
      <MyTuts edges={data.allMarkdownRemark.edges} />
    </Container>
  </Layout>
)

TutorialsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TutorialsPage

export const TutsQuery = graphql`
  query {
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
            thumbnail
            tags
          }
        }
      }
    }
  }
`
