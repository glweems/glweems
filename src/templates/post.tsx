/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../components/SEO';
import { MDX } from '..';
import { PostHeader, Comments } from '../components/Post/Post';
import { Article } from '../components/Post/PostStyles';
import { HeaderContext, ThemeContext } from '../components/Providers';

interface Props {
  data: { post: MDX };
}

type BlogTemplate = React.ReactFragment;

const components = {
  a: (props: any) => <Link {...props} />,
};

const BlogTemplate = ({ data: { post } }: Props): BlogTemplate => {
  const { noHeader } = React.useContext(HeaderContext);
  noHeader();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <SEO
        key="SEO"
        title={post.frontmatter.title}
        keywords={post.frontmatter.tags}
        description={post.excerpt}
      />
      <Article key="Article" className={theme.mode}>
        <PostHeader
          frontmatter={post.frontmatter}
          timeToRead={post.timeToRead}
        />
        <MDXRenderer components={components}>{post.body}</MDXRenderer>
        <Comments
          title={post.frontmatter.title}
          identifier={post.frontmatter.id}
          path={post.frontmatter.path}
        />
      </Article>
    </>
  );
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
