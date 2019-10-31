import React from 'react'
import uuid from 'uuid/v4'
import PostPreview from './PostPreview'
import { BlogPost } from '..'

interface Props {
  posts: BlogPost[]
}

export const BlogPosts: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map(({ excerpt, frontmatter }) => (
      <PostPreview
        key={uuid()}
        {...frontmatter}
        excerpt={excerpt}
        fluid={frontmatter.thumbnail.childImageSharp.fluid}
      />
    ))}
  </>
)
