/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-multi-comp */
// import { Article, Container } from 'elements';
import React from 'react';
import { graphql } from 'gatsby';
// import SEO from '@/seo';
// import Comments from '@/comments';
// import AddComment from '@/forms/comment';

const BlogTemplate = ({ data }) => {
  return (
    <section className="container">
      {/* <SEO title={title} tags={tags} /> */}
      <div>
        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </section>
  );
};

export const pageQuery = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(frontmatter: { path: { regex: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;

export default BlogTemplate;
