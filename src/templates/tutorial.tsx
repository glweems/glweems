import * as React from 'react';
import * as RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

const BlogTemplate = ({
  data: {
    markdownRemark: {
      htmlAst,
      frontmatter: { title, tags },
    },
  },
}) => {
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {},
  }).Compiler;

  return (
    <>
      <SEO title={title} keywords={tags} />
      <article>{renderAst(htmlAst)}</article>
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
      html
      htmlAst
    }
  }
`;
