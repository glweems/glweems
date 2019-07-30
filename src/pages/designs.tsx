/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface AllFileNode {
  relativeDirectory?: string | undefined;
  childImageSharp?:
    | {
        fluid: {};
      }
    | undefined;
}
interface AllFile {
  nodes: AllFileNode[];
}
interface AllBehanceProjectsNode {
  name: string;
  areas: string;
  cover: string;
  slug: string;
}
interface AllBehanceProjects {
  nodes: AllBehanceProjectsNode[];
}
interface DesignsPageProps {
  allFile: {
    nodes: AllFileNode[];
  };
  allBehanceProjects: {
    nodes: AllBehanceProjectsNode[];
  };
}

interface Design {
  name: string;
  areas: string;
  slug: string;
  fluid: any;
}

const Designs = () => {
  const { allFile, allBehanceProjects }: DesignsPageProps = useStaticQuery(graphql`
    query DesignPage {
      allFile(
        filter: {
          name: { regex: "/cover/" }
          absolutePath: { regex: "/gatsby-source-behance-images/" }
          ext: { eq: ".jpg" }
        }
        sort: { fields: relativeDirectory, order: ASC }
      ) {
        nodes {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      allBehanceProject(sort: { fields: slug, order: ASC }) {
        nodes {
          slug
          name
          description
          tags
          cover {
            src
            path
          }
        }
      }
    }
  `);

  const mergeQueries = (projectNodes: AllBehanceProjects, fileNodes: AllFile) => {
    return projectNodes.nodes.map(({ name, areas, slug }) => {
      const {
        childImageSharp: { fluid },
      }: any = fileNodes.nodes.find(file => file.relativeDirectory === slug);

      const design: Design = {
        name,
        areas,
        slug,
        fluid,
      };

      return design;
    });
  };

  const designs = mergeQueries(allBehanceProjects, allFile);

  return (
    <section className="container">
      {designs.map(design => (
        <article className="location-listing">
          <div className="location-image">
            {design.name}
            <Img fluid={design.fluid} />
          </div>
        </article>
      ))}
    </section>
  );
};

export default Designs;
