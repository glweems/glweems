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
        name
        childImageSharp {
          fluid(maxWidth: 700, traceSVG: { background: "#31a1e28", color: "#f8d58c" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      totalCount
    }
  }
`;

export default DesignTemplate;
