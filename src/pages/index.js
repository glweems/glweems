import React from 'react'
import PropTypes from 'prop-types'
import Layout from '@/layout'
import { graphql, Link } from 'gatsby'
import SEO from '@/seo'
import styled, { css } from 'styled-components'
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

const Section = styled.section`
  /* background: ${Theme.colors.light}; */
  margin-bottom: 2rem;

`
const Button = styled.button`
  background: ${Theme.colors.light};
  border-color: ${Theme.colors.dark};
  border-radius: 1px;
  border-style: solid;
  border-width: 2px;
  color: ${Theme.colors.dark};
  display: inline-block;
  font-family: ${Theme.headingFont};
  font-size: 16px;
  font-weight: 500;
  padding: 4px 6px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  :hover {
    background: ${Theme.colors.dark};
    color: ${Theme.colors.light};
    transition: all 0.4s ease 0s;
  }
  ${props =>
    props.blue &&
    css`
      background: ${Theme.colors.blue};
      color: ${Theme.colors.light};
      border-color: ${Theme.colors.blue};
      :hover {
        background: ${Theme.colors.light};
        color: ${Theme.colors.blue};
        border-color: ${Theme.colors.blue};
      }
    `}
  ${props =>
    props.red &&
    css`
      background: ${Theme.colors.red};
      color: ${Theme.colors.light};
      border-color: ${Theme.colors.red};
      :hover {
        background: ${Theme.colors.light};
        color: ${Theme.colors.red};
        border-color: ${Theme.colors.red};
      }
    `}
  ${props =>
    props.center &&
    css`
      margin: 0 auto;
    `}
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
        <Heading>Repos</Heading>
        <CardGrid>
          <PinnedRepos edges={repos} />
        </CardGrid>
        <SectionEnd>
          <Button red>
            <a href="https://github.com/glweems">View All Repos</a>
          </Button>
        </SectionEnd>
      </Section>
      <Heading>Design</Heading>
      <Section>
        <CardGrid>
          <BehanceProjects edges={designs} />
        </CardGrid>
        <SectionEnd>
          <Link to="/design/">
            <Button red>View All Projects</Button>
          </Link>
        </SectionEnd>
      </Section>
      <Section>
        <Heading>Tutorials</Heading>
        <CardGrid>
          <MyTuts edges={tuts} />
        </CardGrid>
        <SectionEnd>
          <Link to="/tutorials">
            <Button red> View All Tutorials </Button>
          </Link>
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
