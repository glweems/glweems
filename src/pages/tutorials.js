import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container } from '../Theme';
import Layout from '@/layout';
import SEO from '@/seo';

export default function TutorialsPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const myPosts = edges.map(edge => edge.node.frontmatter);

  const Links = () =>
    myPosts.map((post, index) => (
      <Link key={index} to={post.path}>
        {post.title}
      </Link>
    ));

  return (
    <Layout>
      <SEO title="Tutorials" />
      <Container>
        <h1>Graphic Design Page</h1>
        <Link to="/">Go back to the homepage</Link>
        <Links />
      </Container>
    </Layout>
  );
}

export const tutorialsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;
