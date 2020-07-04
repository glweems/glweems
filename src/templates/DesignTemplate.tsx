import { motion } from 'framer-motion';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Container from '../components/Common/Container';
import Text from '../components/Common/Text';
import SEO from '../components/SEO';
import Tags from '../components/Tags';
import { DesignsTemplateQuery } from '../types/generated';
export default function DesignTemplate({
  data,
}: PageProps<DesignsTemplateQuery>) {
  return (
    <React.Fragment>
      <SEO
        title={data.design.name}
        article
        keywords={data.design.tags}
        description={data.design.description}
        image={data.seoImagePath.publicURL}
      />

      <Container>
        <Text variant="title">{data.design.name}</Text>
        <Text>{data.design.description}</Text>

        <Tags tags={data.design.tags} />
      </Container>
      <ImagesWrapper>
        {data.images.nodes.map((image, index) => (
          <motion.div key={`${data.design.name}-image-${index}`}>
            <Img
              fluid={image?.childImageSharp?.fluid}
              draggable={false}
              fadeIn
            />
          </motion.div>
        ))}
      </ImagesWrapper>
    </React.Fragment>
  );
}

const ImagesWrapper = styled.div`
  div {
    margin: ${({ theme }) => theme.space[3]} 0;
  }
`;

export const Query = graphql`
  query DesignsTemplate($slug: String!) {
    design: designsYaml(slug: { regex: $slug }) {
      id
      slug
      name
      description
      tags
      tools {
        title
      }
    }
    images: allFile(
      filter: {
        relativePath: { regex: $slug }
        sourceInstanceName: { eq: "designs" }
      }
    ) {
      nodes {
        id
        name
        publicURL
        childImageSharp {
          ...FluidImage
        }
      }
      totalCount
    }
    seoImagePath: file(
      relativePath: { regex: $slug }
      sourceInstanceName: { eq: "designs" }
      name: { eq: "cover" }
    ) {
      publicURL
    }
  }
`;
