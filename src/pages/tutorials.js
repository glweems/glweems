import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import { MyTuts } from '@/my-content'
import { Container } from 'styled/elements'

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
