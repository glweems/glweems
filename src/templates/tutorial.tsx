import * as React from 'react';
import * as RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import styles from '../styles/components/article.module.scss';

interface TutorialProps {
  data: {
    markdownRemark: ChildMarkdownRemark;
  };
}

const BlogTemplate = ({ data: { markdownRemark } }: TutorialProps) => {
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {},
  }).Compiler;

  return (
    <section className="container">
      <SEO title={markdownRemark.frontmatter.title} />
      <div>
        <article className={styles.article}>
          <>{renderAst(markdownRemark.htmlAst)}</>
        </article>
      </div>
    </section>
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
      }
      htmlAst
    }
  }
`;
