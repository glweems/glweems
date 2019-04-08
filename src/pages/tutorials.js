import { Container } from 'elements'
import Layout from '@/layout'
import { MyTuts } from '@/my-content'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'
import { graphql } from 'gatsby'

const TutorialsPage = ({ data }) => (
  <Layout>
    <SEO title='Graphic Design' />
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
