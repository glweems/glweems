import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { H1, H3, Section } from '../utils/theme';
import Card, { Cards } from '../components/Card';
import { BehanceProject, LocalFile } from '../declaration';
import { mergedBehance, filterProjectImages } from '../utils/helpers';

const Image = styled(Img)`
  user-select: none;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 'Info' 'Images' 'Related';
  gap: 3em;
`;

const DesignTemplate = ({
  data: {
    currentProject: { name, tags, description },
    allBehanceProjects,
    allBehanceImages,
    behanceCoverImages,
    allFile: { nodes: fileNodes },
  },
}: DesignTemplate) => {
  const behance = mergedBehance(allBehanceProjects.nodes, behanceCoverImages.nodes);
  return (
    <>
      <SEO title={name} keywords={tags} description={description} />

      <Content>
        <Container fluid>
          <H1 color="yellow">{name}</H1>
          <H3 color="blue">{description}</H3>
        </Container>

        <section>
          {fileNodes.map(({ childImageSharp, id }) => (
            <Image key={id} {...childImageSharp} />
          ))}
        </section>

        <section>
          <H3 color="blue">View Simular Projects</H3>
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
        </section>
      </Content>
    </>
  );
};

interface DesignTemplate {
  data: {
    currentProject: BehanceProject;
    allFile: {
      nodes: LocalFile[];
      totalCount: number;
    };
  };
}

export const designQuery = graphql`
  query SingleDesign($slug: String!) {
    currentProject: behanceProjects(slug: { regex: $slug }) {
      ...BehanceCard
      tools {
        title
      }
    }
    allFile(filter: { relativeDirectory: { regex: $slug }, name: { ne: "cover" } }) {
      nodes {
        id
        name
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      totalCount
    }
    # Related Projects
    allBehanceProjects(limit: 4) {
      nodes {
        ...BehanceCard
      }
    }
    ...BehanceCoverImages
    # All Behance covers
    allBehanceImages: allFile(filter: { behanceProject: { ne: null }, name: { ne: "cover" } }) {
      nodes {
        id
        relativeDirectory
        behanceProject
        childImageSharp {
          ...FluidImage
        }
      }
    }
  }
`;

export default DesignTemplate;
