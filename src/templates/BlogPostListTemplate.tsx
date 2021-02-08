import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Note from '../components/ Note'
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

      <Note as="section">
        {data.posts.nodes.map(({ childMarkdownRemark: { info, ...post } }) => {
          return (
            <Card
              key={post.id}
              title={info.title}
              subtitle={info.subtitle}
              date={info.date}
              path={`/blog${info.path}`}
              Image={
                <Img
                  draggable={false}
                  alt={`${info.title} thumbnail image`}
                  fixed={info.thumbnail.childImageSharp.fixed}
                />
              }
            />
          )
        })}
        <Pager
          previousPagePath={pageContext.previousPagePath}
          nextPagePath={pageContext.nextPagePath}
        />
      </Note>
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
