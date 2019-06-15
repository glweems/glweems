import { BehanceProjects, PinnedRepos } from '@/my-content'
import { Button, Container, Flex } from 'elements'
import { Link, graphql } from 'gatsby'
import About from '@/garrett'
import Layout from '@/containers/layout'
import MyTuts from '@/MyTuts'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'

import styled from 'styled-components'

const Section = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;

  h1,
  a {
    padding: 0 0.5rem;
  }

  ${Flex} {
    margin-bottom: 1rem;
  }
`

export const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`glweems`, `developer`, `designer`]} />
    <Container>
      <Section>
        <About className="about-section" />
        <h2>Give me a shout</h2>
      </Section>

      <Section>
        <h1>Tutorials</h1>
        <Flex scroll between>
          <MyTuts edges={data.allMarkdownRemark.edges} />
        </Flex>
        <Link to="/tutorials">
          <Button blue small>
            View More
          </Button>
        </Link>
      </Section>

      <Section>
        <h1>Design</h1>
        <Flex scroll between>
          <BehanceProjects edges={data.allBehanceProjects.edges} />
        </Flex>
        <Link to="/designs">
          <Button blue small>
            View More
          </Button>
        </Link>
      </Section>

      <Section>
        <h1>Repos</h1>
        <Flex scroll>
          <PinnedRepos edges={data.github.viewer.pinnedRepositories.edges} />
        </Flex>
        <OutboundLink href="https://github.com/glweems">
          <Button blue small>
            View More
          </Button>
        </OutboundLink>
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
