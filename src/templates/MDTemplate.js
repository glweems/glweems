import Layout from '@/layout';
import SEO from '@/seo';
import { graphql, Link } from 'gatsby';
import React from 'react';
import { Container } from 'src/Styled';
import styled from 'styled-components';
import Theme from 'src/Theme';

const MDTemplate = styled.div`
  box-sizing: border-box;
  margin: 52px auto 0;
  max-width: 740px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  width: 100%;
  pre {
    background: ${Theme.colors.light};
    background-color: rgba(0, 0, 0, 0.05);
    font-family: Menlo, Monaco, 'Courier New', Courier, monospace;
    font-size: 16px;
    margin: 0;
    overflow: auto;
    padding: 4px 20px 20px;
    white-space: pre-wrap;
  }
`;

export default function MDTempalte({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <MDTemplate>
        <h1>Graphic Design Page</h1>
        <Link to="/">Go back to the homepage</Link>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {JSON.stringify(html)}
      </MDTemplate>
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
