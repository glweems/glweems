// import { Container } from 'elements';
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

interface DesignTemplate {
  data: {
    behanceProjects: {
      name: string;
      slug: string;
      description: '';
      published: number;
      created: number;
      tags: string[];
      tools: {
        title: string;
        synonym: {
          icon_url: string;
        }[];
        areas: string[];
      };
    };
    allFile: {
      nodes: {
        name: string;
        childImageSharp: {
          fluid: {};
        };
      }[];
      totalCount: number;
    };
  };
}

const DesignTemplate = ({ data }: DesignTemplate) => {
  const { name, tags, description } = data.behanceProjects;
  const { nodes } = data.allFile;

  return (
    <section className="container">
      <SEO title={name} keywords={tags} description={description} />
      <h1>{name}</h1>
      <h3>{description}</h3>
      {nodes.map(({ childImageSharp: { fluid } }) => (
        <Img fluid={fluid} />
      ))}
    </section>
  );
};

export const designQuery = graphql`
  query SingleDesign($slug: String!) {
    behanceProjects(slug: { eq: $slug }) {
      name
      slug
      description
      published
      created
      tags
      tools {
        title
      }
      areas
    }
    allFile(
      filter: { relativeDirectory: { eq: $slug }, name: { ne: "cover" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 700) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      totalCount
    }
  }
`;

export default DesignTemplate;
