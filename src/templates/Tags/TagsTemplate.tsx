import React from 'react'
// Components
import { graphql } from 'gatsby'
import { Container, Link } from '../../components/Common'
import { Frontmatter, BlogPost } from '../..'
import { BlogPosts } from '../../components/BlogPosts'

interface Props extends TagPageQuery {
  pageContext: {
    tag: string
  }
}

interface SectionProps {
  name: string
  tag: string
  qty: number
  children: React.ReactNode
}
const Section: React.FC<SectionProps> = ({ tag, qty, name, children }) => (
  <section>
    <h2>
      {qty} {name} tagged <span>{tag}</span>
    </h2>
    {children}
  </section>
)

const Tags: React.FC<Props> = ({ pageContext, data }) => {
  const { tag } = pageContext

  return (
    <Container>
      <h2>
        <Link to="/tags">All tags</Link>
      </h2>

      <Section name="blog posts" tag={tag} qty={data.matchedPosts.posts.length}>
        <BlogPosts posts={data.matchedPosts.posts} />
      </Section>

      <div></div>
    </Container>
  )
}

export default Tags

interface TagPageQuery {
  data: {
    matchedPosts: {
      totalCount: number
      posts: BlogPost[]
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
