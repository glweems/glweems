/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface AllFileNode {
  relativeDirectory: string;
  childImageSharp?:
    | {
        fluid: {};
      }
    | undefined;
}
interface AllFile {
  nodes: AllFileNode[];
}
interface allBehanceProjectsNode {
  name: string;
  tags: string[];
  cover: string;
  slug: string;
}
interface allBehanceProjects {
  nodes: allBehanceProjectsNode[];
}
interface DesignsPageProps {
  allFile: {
    nodes: AllFileNode[];
  };
  allBehanceProjects: {
    nodes: allBehanceProjectsNode[];
  };
}

interface Design {
  name: string;
  tags: string[];
  slug: string;
  fluid: any;
}

const Designs = () => {
  const { allFile, allBehanceProjects }: DesignsPageProps = useStaticQuery(graphql`
    query DesignPage {
      allFile(
        filter: { name: { eq: "cover" }, relativePath: { regex: "/gatsby-source-behance-images/" } }
        sort: { fields: relativeDirectory, order: ASC }
      ) {
        nodes {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 1000, traceSVG: { background: "31a1e28", color: "#f8d58c" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      allBehanceProjects(sort: { fields: slug, order: ASC }) {
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

  const mergeQueries = (projectNodes: allBehanceProjects, fileNodes: AllFile) => {
    return projectNodes.nodes.map(({ name, tags, slug }) => {
      const {
        childImageSharp: { fluid },
      }: any = fileNodes.nodes.find(file => file.relativeDirectory.includes(slug));

      const design: Design = {
        name,
        tags,
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
