import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { Cards } from '../components/Card';
import { BehanceProject, ImageFile } from '../declaration';
import Designs from '../components/Designs';

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
    allFile,
  },
}: DesignTemplate) => (
  <>
    <SEO title={name} keywords={tags} description={description} />

    <Content>
      <Container fluid>
        <h1>{name}</h1>
        <h3>{description}</h3>
      </Container>

      <section>
        {allFile.nodes.map(({ childImageSharp, id }) => (
          <Image key={id} fluid={childImageSharp.fluid} />
        ))}
      </section>

      <section>
        <Container>
          <h3>View Simular Projects</h3>
          <Cards>
            <Designs limit={3} />
          </Cards>
        </Container>
      </section>
    </Content>
  </>
);

interface DesignTemplate {
  data: {
    currentProject: BehanceProject;
    allFile: {
      nodes: ImageFile[];
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
