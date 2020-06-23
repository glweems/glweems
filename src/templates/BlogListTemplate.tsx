import React from 'react';
import { graphql } from 'gatsby';

interface Props {}
export default function BlogListTemplate(props: Props) {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`;
