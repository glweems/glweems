import React from 'react';
import { Container } from 'reactstrap';
import Card, { Cards } from '../components/Card';
import useTutorialsPageQuery from '../graphql/TutorialsPageQuery';

export const Tutorials = () => {
  const { markdownFiles } = useTutorialsPageQuery();

  return (
    <Container>
      <h1>Code Tutorials</h1>
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

export default Tutorials;
