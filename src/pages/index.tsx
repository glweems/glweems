/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Card, { Cards } from '../components/Card';
import About from '../components/About';
import { mergedBehance, filterProjectImages } from '../utils/helpers';
import useIndexPageQuery from '../graphql/IndexPageQuery';
import { H2, Section } from '../utils/theme';

const Content = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto 1fr;
  grid-template-areas:
    'About'
    'Tutorials'
    'Designs';
  gap: 10em;
  margin-top: 1em;
  section:nth-child(1) {
    grid-area: About;
  }
  section:nth-child(2) {
    grid-area: Tutorials;
  }
  section:nth-child(3) {
    grid-area: Designs;
  }
`;

const IndexPage = () => {
  const {
    behanceCoverImages,
    markdownFiles,
    allBehanceProjects,
    allBehanceImages,
  } = useIndexPageQuery();

  const behance = mergedBehance(allBehanceProjects.nodes, behanceCoverImages.nodes);

  return (
    <Content>
      <Section>
        <Container fluid>
          <About />
        </Container>
      </Section>

      <Section>
        <Container fluid>
          <H2 color="purple">Blog Posts</H2>
          <Cards>
            {markdownFiles.nodes.map(({ id, childMarkdownRemark }) => (
              <Card
                key={id}
                title={childMarkdownRemark.frontmatter.path}
                subtitle={childMarkdownRemark.excerpt}
                tags={childMarkdownRemark.frontmatter.tags}
                link={`tutorials/${childMarkdownRemark.frontmatter.path}`}
                img={childMarkdownRemark.frontmatter.thumbnail.childImageSharp}
              />
            ))}
          </Cards>
        </Container>
      </Section>

      <Section>
        <Container fluid>
          <H2 color="purple">Design Projects</H2>
          <Cards>
            {behance.map(node => (
              <Card
                key={node.slug}
                title={node.name}
                subtitle={node.description}
                tags={node.tags}
                link={`designs/${node.slug}`}
                images={filterProjectImages(node.slug, allBehanceImages.nodes)}
              />
            ))}
          </Cards>
        </Container>
      </Section>
    </Content>
  );
};

export default IndexPage;
