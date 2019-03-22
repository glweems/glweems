import Layout from '@/layout';
import SEO from '@/seo';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'src/Styled';

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
TutorialsPage.propTypes = {
  data: PropTypes.object,
};
