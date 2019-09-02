import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { BehanceProject, ImageFile } from '..';

const Content = styled.div`
  margin-top: 2em;
  .design-img {
    margin-bottom: 1em;
    border-radius: 0.5em;
  }
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
      <section className="container">
        <h1>{name}</h1>
        <h3>{description}</h3>
      </section>

      <section className="container">
        {allFile.nodes.map(({ childImageSharp, id }) => (
          <div className="design-img">
            <Img key={id} fluid={childImageSharp.fluid} />
          </div>
        ))}
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
    allFile(
      filter: { relativeDirectory: { regex: $slug }, name: { ne: "cover" } }
    ) {
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
  }
`;

export default DesignTemplate;
