import React from 'react'
import Layout from '@/layout'
import { graphql, Link } from 'gatsby'
import SEO from '@/seo'
import styled from 'styled-components'
import Theme from 'src/Theme'
import { CardGrid } from '@/card'
import { Heading } from 'src/Styled'
import { PinnedRepos, BehanceProjects, MyTuts } from '@/my-content'

const ContactMe = () => (
  <form name="contact" netlify>
    <p>Give me a shout</p>
    <input id="name" type="name" name="name" placeholder="name" />
    <input id="email" type="email" name="email" placeholder="email" />
    <textarea
      type="text"
      name="message"
      id="message"
      placeholder="message..."
    />
    <p>
      <button type="submit" className="submit">
        Send
      </button>
    </p>
  </form>
)

export default ({ data }) => {
  const {
    github: {
      viewer: {
        pinnedRepositories: { edges: repos },
      },
    },
    allBehanceProjects: { edges: designs },
    allMarkdownRemark: { edges: tuts },
  } = data

  return (
    <Layout>
      <SEO title="Home" keywords={['glweems', 'developer', 'designer']} />
      <section>
        <Heading>Repos</Heading>
        <CardGrid>
          <PinnedRepos edges={repos} />
        </CardGrid>
      </section>
      <div>
        <Heading>Design</Heading>
        <BehanceProjects edges={designs} />
      </div>
      <section>
        <Heading>Tutorials</Heading>
        <CardGrid>
          <MyTuts edges={tuts} />
        </CardGrid>
        <h3>See More -></h3>
      </section>
    </Layout>
  )
}

export const indexQuery = graphql`
  query {
    github {
      viewer {
        pinnedRepositories(last: 4) {
          edges {
            node {
              name
              description
              url
              languages(first: 3) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
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
    allBehanceProjects(filter: { stats: { views: { gte: 20 } } }, limit: 3) {
      edges {
        node {
          fields {
            slug
          }
          name
          description
          areas
          covers {
            size_808
          }
          tools {
            id
            category
            title
            synonym {
              tag_id
              name
              title
              url
              download_url
              gallery_url
              authenticated
              type
              icon_url
              icon_url_2x
            }
          }
        }
      }
    }
  }
`
