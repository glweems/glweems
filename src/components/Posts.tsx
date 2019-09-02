import React from 'react';
import Img from 'gatsby-image';
import Card, { Cards } from './Card';
import usePostsQuery from '../graphql/PostsQuery';

interface Props {
  limit?: number | false;
}

const Posts = ({ limit = false }: Props) => {
  const posts = usePostsQuery();

  return (
    <Cards>
      {posts
        .slice(0, limit || posts.length)
        .map(({ id, excerpt, frontmatter }) => (
          <Card
            key={id}
            title={frontmatter.title}
            subtitle={excerpt}
            tags={frontmatter.tags}
            link={frontmatter.path}
            Image={
              <Img
                alt={frontmatter.title}
                fluid={frontmatter.thumbnail.childImageSharp.fluid}
              />
            }
          />
        ))}
    </Cards>
  );
};

export default Posts;
