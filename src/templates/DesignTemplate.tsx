import { motion } from 'framer-motion';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Box from '../components/Common/Box';
import Container from '../components/Common/Container';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import Tags from '../components/Tags';
import { DesignsTemplateQuery } from '../queries';

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
        <h1>{data.design.name}</h1>
        <p>{data.design.description}</p>

        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
        >
          <Tags tags={data.design.tags} />
          <ShareButtons
            url={data.design.url}
            title={data.design.name}
            tags={data.design.tags}
          />
        </Box>
        {data.images.nodes.map((image, index) => (
          <motion.div key={`${data.design.name}-image-${index}`}>
            <Img
              fluid={image?.childImageSharp?.fluid}
              draggable={false}
              fadeIn
            />
          </motion.div>
        ))}
      </Container>
    </React.Fragment>
  );
}

export const Query = graphql`
  query DesignsTemplate($slug: String!) {
    design: designsYaml(slug: { regex: $slug }) {
      id
      slug
      name
      description
      tags
      url
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
