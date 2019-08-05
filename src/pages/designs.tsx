/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'reactstrap';
import Card, { Cards } from '../components/Card';
import { mergedBehance } from '../utils/helpers';

const Designs = () => {
  const { behanceImages, allBehanceProjects } = UseDesignsPageQuery();

  const behance = mergedBehance(allBehanceProjects.nodes, behanceImages.nodes);

  return (
    <Container>
      <h1>Graphic Design Projects</h1>
      <Cards>
        {behance.map(node => (
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

interface DesignsPageQuery {
  allBehanceProjects: GQLNodes<BehanceProject>;
  behanceImages: GQLNodes<BehanceImage>;
}

const UseDesignsPageQuery = (): DesignsPageQuery =>
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
            fluid(maxWidth: 700, traceSVG: { background: "#1a1e28", color: "#c6c7c6" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

export default Designs;
