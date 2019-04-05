import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import MyTuts from '@/my-tutorials'
import { Container } from 'elements'
import styled from 'styled-components'
import theme, { MQ } from 'theme'

interface Props {
  data: object[]
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  ${MQ.tablet(`grid-template-columns: 1fr 1fr;`)};
  ${MQ.laptop(`grid-template-columns: 1fr 1fr 1fr;`)};
`

const TutorialsPage = ({ data }) => (
  <Layout>
    <SEO title="Graphic Design" />
    <Container>
      <Grid>
        <MyTuts edges={data.allMarkdownRemark.edges} />
      </Grid>
    </Container>
  </Layout>
)

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
