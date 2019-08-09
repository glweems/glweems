import * as React from 'react';
import RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import { Container } from 'reactstrap';
import SEO from '../components/SEO';

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
    components: {},
  }).Compiler;

  return (
    <>
      <SEO title={title} keywords={tags} />
      <Container>
        <article>{renderAst(htmlAst)}</article>
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
