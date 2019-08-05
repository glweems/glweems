/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'reactstrap';
import Card, { Cards } from '../components/Card';

const Designs = () => {
  const { behanceImages, allBehanceProjects } = UseDesignsPageQuery();

  const mergedBehance = allBehanceProjects.nodes.map(node => {
    const found: any = behanceImages.nodes.find((imageNode: { relativeDirectory: string }) =>
      imageNode.relativeDirectory.includes(node.slug),
    );
    return { ...node, ...found.childImageSharp };
  });

  return (
    <Container>
      <h1>Graphic Design Projects</h1>
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
    </Container>
  );
};
const UseDesignsPageQuery = () =>
  useStaticQuery(graphql`
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

export default Designs;
