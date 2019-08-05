import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { media } from '../utils/theme';
import Card from '../components/Card';

const Cards = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  ${media.greaterThan('sm')`
grid-template-columns: repeat(2, 1fr);
`}
  ${media.greaterThan('lg')`
grid-template-columns: repeat(3, 1fr);
`}
`;
const Tutorials = () => {
  const { markdownFiles } = useTutorialsPageQuery();

  return (
    <Container>
      Blog Posts
      <div>
        <Cards>
          {markdownFiles.nodes.map(({ id, childMarkdownRemark }) => (
            <Card
              key={id}
              title={childMarkdownRemark.frontmatter.title}
              subtitle={childMarkdownRemark.excerpt}
              tags={childMarkdownRemark.frontmatter.tags}
              link={`tutorials/${childMarkdownRemark.frontmatter.path}`}
              img={childMarkdownRemark.frontmatter.thumbnail.childImageSharp}
            />
          ))}
        </Cards>
      </div>
    </Container>
  );
};

const useTutorialsPageQuery = () => {
  const { markdownFiles } = useStaticQuery(graphql`
    query TutorialsPageQuery {
      markdownFiles: allFile(
        filter: { gitRemote__NODE: { ne: null }, childMarkdownRemark: { id: { ne: null } } }
      ) {
        nodes {
          id
          sourceInstanceName
          relativeDirectory
          childMarkdownRemark {
            excerpt(pruneLength: 100)
            frontmatter {
              title
              path
              date
              subtitle
              tags
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return {
    markdownFiles,
  };
};

export default Tutorials;
