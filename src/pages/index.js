import React from 'react'
import Layout from '@/layout'
import { graphql, Link } from 'gatsby'
import SEO from '@/seo'
import Theme from 'src/Theme'
import styled from 'styled-components'
import { CardGrid, Card } from '@/card'
import { Flex, Tag } from 'src/Styled'

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
const Heading = styled.h1`
  font-family: ${Theme.headingFont};
`

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

  const PinnedRepos = () =>
    repos.map((repo, i) => {
      const { name, description } = repo.node
      return <Card key={i} title={name} subtitle={description} img="" />
    })
  const BehanceProjects = () =>
    designs.map((design, i) => {
      const {
        name,
        description,
        areas,
        fields: { slug },
        covers: { size_808: img },
      } = design.node
      return (
        <Card
          key={i}
          title={name}
          subtitle={description}
          img={img}
          link={<Link to={`designs/${slug}`}>View Project</Link>}
        >
          {/* <div>
            {areas.map(area => (
              <span key={area}>{area}</span>
            ))}
          </div> */}
        </Card>
      )
    })

  const MyTuts = () =>
    tuts.map((tut, i) => {
      const {
        excerpt,
        frontmatter: { path, title, thumbnail: img, tags },
      } = tut.node
      return (
        <Card
          key={i}
          title={title}
          subtitle={excerpt}
          img={img}
          link={<Link to={path}>Read More...</Link>}
        >
          <Flex>
            {tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Flex>
        </Card>
      )
    })

  return (
    <Layout>
      <SEO title="Home" keywords={['glweems', 'developer', 'designer']} />
      <section>
        <Heading>Repos</Heading>
        <CardGrid>
          <PinnedRepos />
        </CardGrid>
      </section>
      <div>
        <Heading>Design</Heading>
        <BehanceProjects />
      </div>
      <section>
        <Heading>Tutorials</Heading>
        <CardGrid>
          <MyTuts />
        </CardGrid>
        <h3>View All</h3>
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
