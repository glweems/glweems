import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import { MyTuts } from '@/my-content'

const TutorialsPage = ({ data }) => (
  <Layout>
    <SEO title="Graphic Design" />
    <div>
      <MyTuts edges={data.allMarkdownRemark.edges} />
    </div>
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
