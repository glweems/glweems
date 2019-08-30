import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { DiscussionEmbed, CommentCount } from 'disqus-react';
import SEO from '../components/SEO';
import Flex from '../components/Flex';
import { MarkdownRemark } from '..';

interface BlogTemplateProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}
const Content = styled.div``;

const BlogTemplate = ({ data: { post } }: { data: { post: MarkdownRemark } }): JSX.Element => {
  const disqusShortName = 'https-glweems-com';
  const disqusConfig = {
    url: `https://glweems.com${post.frontmatter.path}`,
    identifier: String(post.frontmatter.id),
    title: post.frontmatter.title,
  };
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.tags}
        description={post.excerpt}
      />

      <article className="markdown">
        <h1>{post.frontmatter.title}</h1>

        <Flex>
          <small>{post.frontmatter.date}</small>
          <small>
            <CommentCount shortname={disqusShortName} config={disqusConfig}>
              Comments
            </CommentCount>
          </small>
          <small>{post.timeToRead} Min Read</small>
        </Flex>

        <Content dangerouslySetInnerHTML={{ __html: post.html }} />

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
      timeToRead
      excerpt(pruneLength: 150)
      ...Frontmatter
    }
  }
`;
