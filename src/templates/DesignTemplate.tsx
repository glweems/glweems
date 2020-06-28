import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from '../components/SEO';
import Tags from '../components/Tags';
import Container from '../components/Common/Container';
import Text from '../components/Common/Text';
import { DesignsTemplateQuery } from '../types/generated';

export default function DesignTemplate({
  data,
}: PageProps<DesignsTemplateQuery>) {
  const { design, images } = data;
  const { name, description } = design as Required<
    DesignsTemplateQuery['design']
  >;

  const tags = design?.tags ?? [];

  return (
    <React.Fragment>
      <SEO
        title={name}
        article
        keywords={tags}
        description={description}
        image={data.seoImagePath.publicURL}
      />

      <Container smFlush>
        <Text variant="title">{name}</Text>
        <Text>{description}</Text>

        {tags && <Tags tags={design.tags} />}

        {images.nodes.map((image, index) => (
          <Img
            key={`${name}-image-${index}`}
            fluid={image?.childImageSharp?.fluid}
            draggable={false}
          />
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
          fluid(
            traceSVG: { color: "#d0c1fa", background: "transparent" }
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
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
