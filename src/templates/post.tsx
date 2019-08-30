/* eslint-disable react/no-danger */
import { DiscussionEmbed } from 'disqus-react';
import * as React from 'react';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import SEO from '../components/SEO';
import { MarkdownRemark } from '..';
import { PostHeader } from '../components/Post';

const BlogTemplate = ({ data: { post } }: { data: { post: MarkdownRemark } }): JSX.Element => {
  const disqusShortName = 'https-glweems-com';
  const disqusConfig = {
    url: `https://glweems.com${post.frontmatter.path}`,
    identifier: String(post.frontmatter.id),
    title: post.frontmatter.title,
  };

  const Post = ({ elements }: { elements: unknown }) =>
    new RehypeReact({
      createElement: React.createElement,
      components: { a: OutboundLink },
    }).Compiler(elements).props.children;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.tags}
        description={post.excerpt}
      />

      <article className="blog-post">
        <PostHeader post={post} />

        <Post elements={post.htmlAst} />
        <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
      </article>
    </>
  );
};

export default BlogTemplate;

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
