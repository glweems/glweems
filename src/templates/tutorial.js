/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-multi-comp */
// import { Article, Container } from 'elements';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
// import SEO from '@/seo';
// import Comments from '@/comments';
// import AddComment from '@/forms/comment';

const BlogPost = styled.div`
  max-width: 100%;
  padding: 1rem;
`;

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { title, tags } = markdownRemark.frontmatter;
  const { html, fields } = markdownRemark;
  const { slug } = fields;

  return (
    <div>
      {/* <SEO title={title} tags={tags} /> */}
      <BlogPost>
        <div>
          <article dangerouslySetInnerHTML={{ __html: html }} />
          {/* <AddComment
            post={slug.replace('/tutorials/', '')}
            url="/tutorials/comments"
          /> */}
          {/* <Comments
            url={`/tutorials/comments/${slug.replace('/tutorials/', '')}`}
          /> */}
        </div>
      </BlogPost>
    </div>
  );
};

export const pageQuery = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;

export default BlogTemplate;
