import React from 'react'
// Components
import { graphql } from 'gatsby'
import { Container, Link } from '../components/Common'
import { Frontmatter } from '..'

interface Props extends TagsPageQuery {
  pageContext: {
    tag: string
  }
}

const Tags: React.FC<Props> = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { posts, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Container>
      <h1>{tagHeader}</h1>
      <ul>
        {posts.map(({ frontmatter }) => {
          const { title, path } = frontmatter
          return (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <div>
        <Link to="/tags">All tags</Link>
      </div>
    </Container>
  )
}

export default Tags

interface TagsPageQuery {
  data: {
    allMarkdownRemark: {
      totalCount: number
      posts: {
        frontmatter: Frontmatter
      }[]
    }
  }
}

export const TagsPageQuery = graphql`
  query TagsPageTemplate($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      posts: nodes {
        ...Frontmatter
      }
    }
  }
`
