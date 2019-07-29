import { Container } from 'elements';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import SEO from '@/seo';
import MyTuts from '@/MyTuts';

const TutorialsPage = ({ data }) => (
  <>
    <SEO
      title="All Tutorials"
      keywords={[
        'tutorials',
        'how to',
        'react',
        'javascript',
        'gatsby',
        'redux',
        'typescript',
        'styled-components',
      ]}
    />
    <Container>
      <MyTuts edges={data.allMarkdownRemark.edges} />
    </Container>
  </>
);

TutorialsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TutorialsPage;

export const TutsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            thumbnail {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;
