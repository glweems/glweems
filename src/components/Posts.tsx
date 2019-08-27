import React from 'react';
import Card from './Card';
import usePostsQuery from '../graphql/PostsQuery';

interface Props {
  limit?: number | false;
}

const Posts = ({ limit = false }: Props) => {
  const posts = usePostsQuery();

  return posts
    .slice(0, limit || posts.length)
    .map(({ id, title, subtitle, tags, path, thumbnail }) => (
      <Card key={id} title={title} subtitle={subtitle} tags={tags} link={path} img={thumbnail} />
    ));
};

export default Posts;
