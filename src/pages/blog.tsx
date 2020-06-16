import React from 'react';
import { Container } from '../components/Common';
import usePostsQuery from '../graphql/PostsQuery';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import loadable from '@loadable/component';

const BlogPosts = loadable(() => import('./../components/BlogPosts'), { fallback: <LoadingSpinner /> });
export default () => {
  const posts = usePostsQuery();
  return (
    <Container>
      <h1>Blog Posts</h1>
      <BlogPosts posts={posts} />
    </Container>
  );
};
