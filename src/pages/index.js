import React from 'react';
import Layout from '@/layout';
import SEO from '@/seo';
import Hello from '@/hello';
import About from '@/about';
import Repos from '@/repos';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hello />
    <About />
    <Repos data={data} />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const PageQuery = graphql`
  query {
    github {
      viewer {
        pinnedRepositories(last: 20) {
          edges {
            node {
              name
              description
              url
              homepageUrl
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
