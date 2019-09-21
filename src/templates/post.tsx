import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../components/SEO';
import { MDX } from '..';
import { PostHeader, Comments } from '../components/Post/Post';
import { Article } from '../components/Post/PostStyles';
import { ThemeContext } from '../components/Providers';

interface Props {
  data: { post: MDX };
}

const BlogTemplate = ({ data: { post } }: Props) => {
  const { theme } = useContext(ThemeContext);

  return [
    <SEO
      key="SEO"
      title={post.frontmatter.title}
      keywords={post.frontmatter.tags}
      description={post.excerpt}
    />,
    <Article key="Article" className={theme.mode}>
      <PostHeader frontmatter={post.frontmatter} timeToRead={post.timeToRead} />
      <MDXRenderer>{post.body}</MDXRenderer>
      <Comments
        title={post.frontmatter.title}
        identifier={post.frontmatter.id}
        path={post.frontmatter.path}
      />
    </Article>,
  ];
};

export const BlogPost = graphql`
  query PostQuery($slug: String!) {
    post: mdx(frontmatter: { path: { eq: $slug } }) {
      body
      timeToRead
      ...Frontmatter
    }
  }
`;

export default BlogTemplate;
