import * as React from 'react';
import RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';
import { DiscussionEmbed, CommentCount } from 'disqus-react';
import SEO from '../components/SEO';
import Flex from '../components/Flex';

type GitArray = [string, string, string, string?];

interface Frontmatter {
  date: string;
  name: string;
  title: string;
  subtitle: string;
  codesandbox: GitArray;
  tags: string[];
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      timeToRead: number;
      htmlAst: object;
      frontmatter: Frontmatter;
    };
  };
}
const Content = styled.div``;

const BlogTemplate = ({
  data: {
    markdownRemark: { timeToRead, html, excerpt, frontmatter },
  },
}: BlogTemplateProps): JSX.Element => {
  const disqusShortName = 'glweems';
  const disqusConfig = {
    url: `https://glweems.com${frontmatter.path}`,
    identifier: frontmatter.id,
    title: frontmatter.title,
  };
  return (
    <>
      <SEO title={frontmatter.title} keywords={frontmatter.tags} description={excerpt} />
      <article className="markdown">
        <h1>{frontmatter.title}</h1>
        <Flex>
          <small>{frontmatter.date}</small>
          <small>
            <CommentCount shortname={disqusShortName} config={disqusConfig}>
              Comments
            </CommentCount>
          </small>
          <small>{timeToRead} Min Read</small>
        </Flex>

        <Content dangerouslySetInnerHTML={{ __html: html }} />

        <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
      </article>
    </>
  );
};

export default BlogTemplate;

export const BlogPost = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 150)
      frontmatter {
        id
        path
        date(formatString: "MMMM DD, YYYY")
        title
        next
        tags
        thumbnail {
          id
          childImageSharp {
            ...FluidImage
          }
        }
      }
    }
  }
`;
