/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Card, { Cards } from '../components/Card';
import About from '../components/About';
import { mergedBehance, filterProjectImages } from '../utils/helpers';
import useIndexPageQuery from '../graphql/IndexPageQuery';
import { H2, Section } from '../utils/theme';

const IndexPage = () => {
  const {
    behanceCoverImages,
    markdownFiles,
    allBehanceProjects,
    allBehanceImages,
  } = useIndexPageQuery();
  const behance = mergedBehance(allBehanceProjects.nodes, behanceCoverImages.nodes);
  return (
    <div>
      <Section>
        <About />
      </Section>

      <Section>
        <H2 color="blue">Blog Posts</H2>
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
      </Section>

      <Section>
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
      </Section>
    </div>
  );
};

export default IndexPage;
