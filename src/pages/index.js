import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/layout'
import { graphql, Link } from 'gatsby'
import SEO from '@/seo'
import styled from 'styled-components'
import theme from 'src/styled/theme'

import { PinnedRepos, BehanceProjects, MyTuts } from '@/my-content'
import { H1, A, Container, Flex } from 'elements'

import About from '@/garrett'

const Section = styled.section`
  margin: 0 auto;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${theme.colors.dark};
`

export const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['glweems', 'developer', 'designer']} />
    <Container>
      <Section>
        <About />
      </Section>

      <Section>
        <H1 bold>Repos</H1>
        <Flex scroll>
          <PinnedRepos edges={data.github.viewer.pinnedRepositories.edges} />
        </Flex>
        <A href="https://github.com/glweems">View All Repos -></A>
      </Section>

      <Section>
        <H1 bold>Design</H1>
        <Flex scroll>
          <BehanceProjects edges={data.allBehanceProjects.edges} />
        </Flex>
        <Link to="/designs">View All Designs -></Link>
      </Section>

      <Section>
        <H1 bold>Tutorials</H1>
        <Flex scroll>
          <MyTuts edges={data.allMarkdownRemark.edges} />
        </Flex>
        <Link to="/tutorials/">View All Tutorials</Link>
      </Section>
    </Container>
  </Layout>
)

export const indexQuery = graphql`
  query IndexPage {
    github {
      viewer {
        pinnedRepositories(last: 4) {
          edges {
            node {
              name
              description
              url
              homepageUrl
              languages(first: 3) {
                edges {
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    allBehanceProjects(filter: { stats: { views: { gte: 20 } } }, limit: 4) {
      edges {
        node {
          fields {
            slug
          }
          name
          description
          covers {
            size_max_808
          }
          tags
        }
      }
    }
    allMarkdownRemark(limit: 4) {
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
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}
export default IndexPage
