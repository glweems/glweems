import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Card from '../components/Card'
import Box from '../components/Common/Box'
import Pager, { PagerProps } from '../components/Pager'
import SEO from '../components/SEO'
import { BlogListQuery } from '../queries'
import { breakpoints } from '../theme'

export interface PageContext extends PagerProps {
  pageNumber: number
  humanPageNumber: number
  skip: number
  limit: number
  numberOfPages: number
}

export default function ArticleListTemplate({
  data,
  pageContext,
}: PageProps<BlogListQuery, PageContext>) {
  return (
    <React.Fragment>
      <SEO
        title={`Blog Posts Results ${pageContext.pageNumber} of ${pageContext.numberOfPages}`}
      />

      <Box container>
        {data.posts.nodes.map(
          ({ childMarkdownRemark: { frontmatter, ...post } }) => {
            const sources = [
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
              <Card
                key={post.id}
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                date={frontmatter.date}
                path={`/blog${frontmatter.path}`}
                Image={
                  <Img
                    draggable={false}
                    alt={`${frontmatter.title} thumbnail image`}
                    fixed={sources}
                  />
                }
              />
            )
          }
        )}
        <Pager
          previousPagePath={pageContext.previousPagePath}
          nextPagePath={pageContext.nextPagePath}
        />
      </Box>
    </React.Fragment>
  )
}

export const Query = graphql`
  query BlogList($skip: Int, $limit: Int) {
    posts: allFile(
      limit: $limit
      skip: $skip
      filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        childMarkdownRemark {
          ...BlogPostCard
        }
      }
    }
  }
`
