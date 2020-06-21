import Img from 'gatsby-image';
import React from 'react';
import { PostsQuery_allMarkdownRemark_nodes } from '../graphql/_types/PostsQuery';
import Card, { Cards } from './Card';
interface BlogPostsProps {
  posts: PostsQuery_allMarkdownRemark_nodes[];
}
const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => (
  <Cards>
    {posts.map(({ excerpt, frontmatter }) => {
      const { path, title, date, tags } = frontmatter as any;
      const props = {
        path,
        title,
        date,
        tags,
        excerpt: excerpt ?? '',
        fluid: frontmatter?.thumbnail?.childImageSharp?.fluid
      };
      return (
        <Card
          key={path}
          title={title}
          subtitle={excerpt ?? ''}
          link={path}
          tags={tags}
          Image={<Img fluid={frontmatter?.thumbnail?.childImageSharp?.fluid} draggable={false} />}
        />
      );
    })}
  </Cards>
);

export default BlogPosts;
