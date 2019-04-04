import Layout from '@/layout'
import SEO from '@/seo'
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import theme from 'theme'

import BehanceProjects, { MyTuts } from '@/my-content'
import { PinnedRepos } from '@/PinnedRepos'
import { A, Container, Flex, H1 } from 'elements'

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
        <H1 bold={true}>Repos</H1>
        <Flex scroll={true}>
          <PinnedRepos edges={data.github.viewer.pinnedRepositories.edges} />
        </Flex>
        <A href="https://github.com/glweems">View All Repos -></A>
      </Section>

      <Section>
        <H1 bold={true}>Design</H1>
        <Flex scroll={true}>
          <BehanceProjects edges={data.allBehanceProjects.edges} />
        </Flex>
        <Link to="/designs">View All Designs -></Link>
      </Section>

      <Section>
        <H1 bold={true}>Tutorials</H1>
        <Flex scroll={true}>
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
export default IndexPage
