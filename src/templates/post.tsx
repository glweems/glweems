/* eslint-disable react/no-danger */
import { DiscussionEmbed } from 'disqus-react';
import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import { MarkdownRemark } from '..';
import { PostHeader, Content, Article } from '../components/Post';
import { ThemeContext } from '../components/Providers';

interface Props {
  data: { post: MarkdownRemark };
}

type BlogTemplate = [JSX.Element, JSX.Element];

const BlogTemplate = ({ data: { post } }: Props): BlogTemplate => {
  const { theme } = useContext(ThemeContext);
  const disqusShortName = 'https-glweems-com';
  const disqusConfig = {
    url: `https://glweems.com${post.frontmatter.path}`,
    identifier: String(post.frontmatter.id),
    title: post.frontmatter.title,
  };

  return [
    <SEO
      title={post.frontmatter.title}
      keywords={post.frontmatter.tags}
      description={post.excerpt}
    />,
    <Article className={theme.mode}>
      <PostHeader post={post} />
      <Content elements={post.htmlAst} />
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
    </Article>,
  ];
};

export const BlogPost = graphql`
  query PostQuery($slug: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      htmlAst
      timeToRead
      excerpt(pruneLength: 150)
      ...Frontmatter
    }
  }
`;

export default BlogTemplate;
