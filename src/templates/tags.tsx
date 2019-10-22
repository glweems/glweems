import React from 'react'
// Components
import { graphql } from 'gatsby'
import { Container, Link } from '../components/Common'
import { Frontmatter } from '..'
import BlogPosts from '../components/Posts'

interface Props extends TagPageQuery {
  pageContext: {
    tag: string
  }
}

// const sectionTitle = (tag, qty, type) => `${qty} ${type}${qty === 1 ? '' : 's'} tagged with "${tag}"`

const Tags: React.FC<Props> = ({ pageContext, data }) => {
  console.log('TCL: data', data)
  const { tag } = pageContext

  return (
    <Container>
      <BlogPosts posts={data.matchedPosts.posts} />

      <div>
        <Link to="/tags">All tags</Link>
      </div>
    </Container>
  )
}

export default Tags

interface TagPageQuery {
  data: {
    matchedPosts: {
      totalCount: number
      posts: {
        id: string
        excerptAst: object
        frontmatter: Frontmatter
      }[]
    }
  }
}

export const TagPageQuery = graphql`
  query TagPageTemplate($tag: String) {
    matchedPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      qty: totalCount
      posts: nodes {
        excerpt
        ...Frontmatter
      }
    }
    matchedDesigns: allBehanceProjects(limit: 2000, filter: { tags: { in: [$tag] } }) {
      qty: totalCount
      designs: nodes {
        description
      }
    }
    matchedSideProjects: allSideprojectsYaml(filter: { tags: { in: [$tag] } }) {
      qty: totalCount
      projects: nodes {
        link
        title
        github
        description
      }
    }
  }
`
