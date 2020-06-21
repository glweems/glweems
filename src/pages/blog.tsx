import React from 'react';
import BlogPosts from '../components/BlogPosts';
import { Container } from '../components/Common';
import usePostsQuery from '../graphql/PostsQuery';

export default () => {
  const posts = usePostsQuery();
  return (
    <Container>
      <h1>Blog Posts</h1>
      <BlogPosts posts={posts} />
    </Container>
  );
};
