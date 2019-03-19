import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '../Theme';

export default function MDTempalte({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Container>
      <div className="blog-post">
        {/* <h1>{frontmatter.title}</h1> */}
        {/* <h2>{frontmatter.date}</h2> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Container>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
