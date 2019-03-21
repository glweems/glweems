import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
// import Container from '@/container';
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
      <div>
        <Links />
      </div>
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
