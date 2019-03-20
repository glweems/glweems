import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container } from '../Theme';
import Layout from '@/layout';
import SEO from '@/seo';

export default function MDTempalte({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <h1>Graphic Design Page</h1>
        <Link to="/">Go back to the homepage</Link>
        <div className="blog-post">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Container>
    </Layout>
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
