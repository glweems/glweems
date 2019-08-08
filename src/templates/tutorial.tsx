import * as React from 'react';
import RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import SEO from '../components/SEO';
import { A, H1, H2, H3, H4, H5, H6, helperCss } from '../utils/theme';
import '../../node_modules/gatsby-remark-vscode/styles.css';

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      htmlAst: object;
      frontmatter: {
        title: string;
        path: string;
        date: string;
        subtitle: string;
        tags: string[];
      };
    };
  };
}

const Article = styled<any>('article')`
  ${props => props && helperCss};
  padding-top: 3em;
  h1 {
    color: ${props => props.theme.colors.yellow};
  }

  h2 {
    color: ${props => props.theme.colors.purple};
  }
  h3 {
    color: ${props => props.theme.colors.red};
  }

  h4 {
    color: ${props => props.theme.colors.green};
  }

  blockquote {
    color: ${props => props.theme.darkColors.muted};
  }
  max-width: 100%;
  pre {
    border-radius: 0;
    max-width: 100%;
    code {
      max-width: 100%;
      text-overflow: nowrap;
    }
  }
`;

const BlogTemplate = ({
  data: {
    markdownRemark: {
      htmlAst,
      frontmatter: { title, tags },
    },
  },
}: BlogTemplateProps) => {
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
      a: A,
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
    },
  }).Compiler;

  return (
    <>
      <SEO title={title} keywords={tags} />
      <Container>
        <Article color="muted">{renderAst(htmlAst)}</Article>
      </Container>
    </>
  );
};

export default BlogTemplate;

export const BlogPost = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        path
        date
        subtitle
        tags
      }
      htmlAst
    }
  }
`;
