import { Container } from 'elements'
import MyTuts from '@/MyTuts'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'
import { graphql } from 'gatsby'

const TutorialsPage = ({ data }) => (
  <>
    <SEO title="Tutorials" />
    <Container>
      <MyTuts edges={data.allMarkdownRemark.edges} />
    </Container>
  </>
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
