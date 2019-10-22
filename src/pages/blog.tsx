import React from 'react'
import { Container } from '../components/Common'
import Posts from '../components/Posts'
import usePostsQuery from '../graphql/PostsQuery'

export default () => {
  const posts = usePostsQuery()
  return (
    <Container>
      <h1>Blog Posts</h1>
      <Posts posts={posts} />
    </Container>
  )
}
