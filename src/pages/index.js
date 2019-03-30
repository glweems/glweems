import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/layout'
import { graphql, Link } from 'gatsby'
import SEO from '@/seo'
import styled, { css } from 'styled-components'
import Theme from 'src/Theme'
import { CardGrid, Card, CardTitle, CardSubtitle } from '@/card'
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

const Section = styled.section`
  /* background: ${Theme.colors.light}; */
  max-width: ${Theme.breakpoints.tablet};
  margin: 0 auto;
  margin-bottom: 2.5rem;

`

const BigLink = styled(Link)`
  font-family: ${Theme.fontFamily.header};
  font-weight: 600;
  color: ${Theme.colors.green} !important;
`

const SectionEnd = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
`
export const IndexPage = ({ data }) => {
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
      <Section>
        <Heading>Hi, I'm Garrett</Heading>
        <Card>
          <CardTitle>Designer / Developer Based in Melbourne, FL.</CardTitle>
          <CardSubtitle>gwgraphicdesign@gmail.com</CardSubtitle>
        </Card>
      </Section>
      <Section>
        <Heading>Repos</Heading>
        <CardGrid>
          <PinnedRepos edges={repos} />
        </CardGrid>
        <SectionEnd>
          <a href="https://github.com/glweems">View All Repos -></a>
        </SectionEnd>
      </Section>
      <Section>
        <Heading>Design</Heading>
        <CardGrid>
          <BehanceProjects edges={designs} />
        </CardGrid>
        <SectionEnd>
          <BigLink to="/design">View All Designs -></BigLink>
        </SectionEnd>
      </Section>
      <Section>
        <Heading>Tutorials</Heading>
        <CardGrid>
          <MyTuts edges={tuts} />
        </CardGrid>
        <SectionEnd>
          <BigLink to="/tutorials">View All Tutorials</BigLink>
        </SectionEnd>
      </Section>
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
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}
export default IndexPage
