/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../utils/theme';
import Card from '../components/Card';

const Cards = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  ${media.greaterThan('sm')`
grid-template-columns: repeat(2, 1fr);
`}
  ${media.greaterThan('lg')`
grid-template-columns: repeat(3, 1fr);
`}
`;

const Designs = () => {
  const { behanceImages, allBehanceProjects } = UseDesignsPageQuery();

  const mergedBehance = allBehanceProjects.nodes.map(node => {
    const found: any = behanceImages.nodes.find((imageNode: { relativeDirectory: string }) =>
      imageNode.relativeDirectory.includes(node.slug),
    );
    return { ...node, ...found.childImageSharp };
  });

  return (
    <section className="container">
      <Cards>
        {mergedBehance.map(node => (
          <Card
            key={node.slug}
            title={node.name}
            subtitle={node.description}
            img={node}
            tags={node.tags}
            link={`designs/${node.slug}`}
          />
        ))}
      </Cards>
    </section>
  );
};
const UseDesignsPageQuery = () => {
  const { behanceImages, allBehanceProjects } = useStaticQuery(graphql`
    query DesignsPageQuery {
      allBehanceProjects {
        nodes {
          slug
          name
          description
          tags
        }
      }
      behanceImages: allFile(
        filter: {
          relativeDirectory: { regex: "/gatsby-source-behance-images/" }
          name: { eq: "cover" }
        }
      ) {
        nodes {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `);

  return {
    behanceImages,
    allBehanceProjects,
  };
};

export default Designs;
