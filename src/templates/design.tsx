// import { Container } from 'elements';
import React from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from 'reactstrap';
import SEO from '../components/SEO';

const DesignTemplate = ({
  data: {
    behanceProjects: { name, tags, description },
    allFile: { nodes: fileNodes },
  },
}: DesignTemplate) => (
  <>
    <SEO title={name} keywords={tags} description={description} />
    <Container fluid>
      <h1>{name}</h1>
      <h3>{description}</h3>
      {fileNodes.map(({ childImageSharp: { fluid }, id }) => (
        <Img key={id} fluid={fluid} />
      ))}
    </Container>
  </>
);

interface DesignTemplate {
  data: {
    behanceProjects: BehanceProject;
    allFile: {
      nodes: LocalFile[];
      totalCount: number;
    };
  };
}

export const designQuery = graphql`
  query SingleDesign($slug: String!) {
    behanceProjects(slug: { regex: $slug }) {
      name
      slug
      description
      tags
      tools {
        title
      }
      tags
    }
    allFile(filter: { relativeDirectory: { regex: $slug }, name: { ne: "cover" } }) {
      nodes {
        id
        name
        childImageSharp {
          fluid(maxWidth: 700, traceSVG: { background: "#1a1e28", color: "#c6c7c6" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      totalCount
    }
  }
`;

export default DesignTemplate;
