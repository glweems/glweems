import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'reactstrap';
import Card, { Cards } from '../components/Card';

const Tutorials = () => {
  const { markdownFiles } = useTutorialsPageQuery();

  return (
    <Container>
      Code Tutorials
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
    </Container>
  );
};

const useTutorialsPageQuery = () =>
  useStaticQuery(graphql`
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

export default Tutorials;
