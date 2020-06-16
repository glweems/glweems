import React from 'react'
import { PostsQuery_allMarkdownRemark_nodes } from '../graphql/_types/PostsQuery'
import PostPreview from './PostPreview'

interface Props {
  posts: PostsQuery_allMarkdownRemark_nodes[]
}

export const BlogPosts: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(({ excerpt, frontmatter }) => {
      const { path, title, date, tags } = frontmatter as any
      const props = {
        path,
        title,
        date,
        tags,
        excerpt: excerpt ?? '',
        fluid: frontmatter?.thumbnail?.childImageSharp?.fluid
      }
      return <PostPreview {...props} />
    })}
  </>
)
