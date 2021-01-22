import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
// import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Box from '../components/Common/Box'
import Paper from '../components/Common/Paper'
import Heatmap from '../components/Heatmap'
import { IndexPageQuery } from '../queries'
import { breakpoints } from '../theme'
// import LoadingSpinner from '../components/LoadingSpinner'

// const Heatmap = React.lazy(() => import('../components/Heatmap'))

export default function IndexPage({ data }: PageProps<IndexPageQuery>) {
  return (
    <React.Fragment>
      <Section>
        <h2>Blog Posts</h2>
        {data.posts.nodes.map(
          ({ childMarkdownRemark: { frontmatter, ...post } }) => {
            const blogSources = [
              frontmatter.thumbnail.sm.fixed,
              {
                ...frontmatter.thumbnail.md.fixed,
                media: `(min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
              },
              {
                ...frontmatter.thumbnail.lg.fixed,
                media: `(min-width: ${breakpoints[2]})`,
              },
            ]
            return (
              <Paper key={post.id} style={{ marginBottom: '1rem' }}>
                <Card
                  key={post.id}
                  title={frontmatter.title}
                  subtitle={frontmatter.subtitle}
                  date={frontmatter.date}
                  path={`/blog${frontmatter.path}`}
                  Image={
                    <Img
                      draggable={false}
                      alt={frontmatter.title}
                      fixed={blogSources}
                    />
                  }
                />
              </Paper>
            )
          }
        )}
      </Section>

      <Section>
        <h2>Designs</h2>

        {data.designs.nodes.map(({ name, ...design }, index) => {
          const designSources = [
            design.fields.thumbnail.sm.fixed,
            {
              ...design.fields.thumbnail.md.fixed,
              media: `(min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
            },
            {
              ...design.fields.thumbnail.lg.fixed,
              media: `(min-width: ${breakpoints[2]})`,
            },
          ]
          return (
            <Paper key={design.slug} style={{ marginBottom: '1rem' }}>
              <Card
                key={design.slug}
                path={`/design/${design.slug}`}
                subtitle={design.description}
                title={name}
                Image={
                  <Img
                    draggable={false}
                    alt={`${name} thumbnail image`}
                    fixed={designSources}
                  />
                }
              />
            </Paper>
          )
        })}
      </Section>

      <Section>
        {data.allGithubPinneditems.nodes.map((pinned) => {
          const githubSources = [
            pinned.thumbnail.sm.fixed,
            {
              ...pinned.thumbnail.md.fixed,
              media: `(min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
            },
            {
              ...pinned.thumbnail.lg.fixed,
              media: `(min-width: ${breakpoints[2]})`,
            },
          ]
          return (
            <Paper key={pinned.name} style={{ marginBottom: '1rem' }}>
              <Card
                title={pinned.name}
                subtitle={pinned.description}
                date={pinned.createdAt}
                path={pinned.homepageUrl}
                Image={
                  <Img
                    draggable={false}
                    alt={`${pinned.name} thumbnail image`}
                    fixed={githubSources}
                  />
                }
              ></Card>
            </Paper>
          )
        })}
      </Section>

      <Box container>
        <Heatmap />
      </Box>
    </React.Fragment>
  )
}

const Section = styled(Box)``

;(Section as any).defaultProps = { as: 'section', container: true, p: 2, my: 2 }

export const Query = graphql`
  query IndexPage($limit: Int = 3) {
    posts: allFile(
      limit: $limit
      filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        childMarkdownRemark {
          ...BlogPostCard
        }
      }
    }

    designs: allDesignsYaml(limit: $limit, sort: { fields: slug, order: ASC }) {
      nodes {
        ...DesignCard
      }
    }

    allGithubPinneditems(limit: $limit) {
      nodes {
        ...GithubCard
      }
    }
  }
`
