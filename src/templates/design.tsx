import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import { BehanceProject, ImageFile } from '..';
import { Container } from '../components/Common';

export default function DesignTemplate({ data }: DesignTemplate) {
  const { currentProject, allFile } = data;
  const { name, tags, description } = currentProject;
  return [
    <SEO
      key={`seo-design-${name}`}
      title={name}
      keywords={tags}
      description={description}
    />,
    <section key={`content-design-${name}-1`}>
      <Container>
        <h1>{name}</h1>
        <h3>{description}</h3>
      </Container>
    </section>,
    allFile.nodes.map(({ childImageSharp, id }) => (
      <Container key={`design-${name}-${id}`}>
        <Img fluid={childImageSharp.fluid} />
      </Container>
    )),
  ];
}
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
