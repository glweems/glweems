import * as React from 'react';
import RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import CodeSandbox from 'simple-codesandbox';
import styled from 'styled-components';
import SEO from '../components/SEO';

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
    markdownRemark: {
      timeToRead,
      html,
      excerpt,
      frontmatter: {
        date,
        title,
        tags,
        thumbnail: {
          childImageSharp: { fluid },
        },
      },
    },
  },
}: BlogTemplateProps): JSX.Element => {
  return (
    <>
      <SEO title={title} keywords={tags} description={excerpt} />
      <article className="markdown">
        <Content dangerouslySetInnerHTML={{ __html: html }} />
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
        date
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
