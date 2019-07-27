import * as React from 'react';
import * as RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import styles from '../styles/components/articlel.module.scss';

interface TutorialProps {
  data: {
    markdownRemark: ChildMarkdownRemark;
  };
}

const BlogTemplate = ({
  data: {
    markdownRemark: {
      htmlAst,
      frontmatter: { title },
    },
  },
}: TutorialProps) => {
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {},
  }).Compiler;

  return (
    <section className="container">
      <SEO title={title} />
      <div>
        <article className={styles.article}>
          <>{renderAst(htmlAst)}</>
        </article>
      </div>
    </section>
  );
};

export default BlogTemplate;

export const BlogPost = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(frontmatter: { path: { regex: $slug } }) {
      id
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;
