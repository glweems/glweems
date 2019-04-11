import { BehanceProjects, MyTuts, PinnedRepos } from '@/my-content'
import { Container, Flex, H1 } from 'elements'

import About from '@/garrett'
import Layout from '@/containers/layout'
import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Section = styled.section`
  margin: 2rem 0;
`

export const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={['glweems', 'developer', 'designer']} />
    <Container>
      <Section>
        <About />
      </Section>

      <Section>
        <H1 bold>Tutorials</H1>
        <Flex scroll>
          <MyTuts edges={data.allMarkdownRemark.edges} />
        </Flex>
        <Link to='/tutorials'>View All Tutorials</Link>
      </Section>

      <Section>
        <H1 bold>Design</H1>
        <Flex scroll between>
          <BehanceProjects edges={data.allBehanceProjects.edges} />
        </Flex>
        <Link to='/designs'>View All Designs -></Link>
      </Section>

      <Section>
        <H1 bold>Repos</H1>
        <Flex scroll>
          <PinnedRepos edges={data.github.viewer.pinnedRepositories.edges} />
        </Flex>
        <Link href='https://github.com/glweems'>View All Repos -></Link>
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
              id
              name
              description
              url
              homepageUrl
              languages(first: 3) {
                edges {
                  node {
                    id
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
          id
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
IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            excerpt: PropTypes.string.isRequired,
            timeToRead: PropTypes.number.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
    github: PropTypes.shape({
      viewer: PropTypes.shape({
        pinnedRepositories: PropTypes.shape({
          edges: PropTypes.arrayOf(
            PropTypes.shape({
              node: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                languages: PropTypes.shape({
                  node: PropTypes.shape({
                    edges: PropTypes.arrayOf({
                      name: PropTypes.string.isRequired,
                      color: PropTypes.string.isRequired,
                    }),
                  }),
                }),
              }),
            }).isRequired
          ),
        }),
      }),
    }),
    allBehanceProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            covers: PropTypes.shape({
              size_max_808: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            tags: PropTypes.array.isRequired,
          }),
        }).isRequired
      ),
    }),
  }),
}

export default IndexPage
