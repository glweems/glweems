import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from '../../components/SEO';
import Tags from '../../components/Tags';
import Container from '../../components/Common/Container';
import Text from '../../components/Common/Text';
import { DesignsTemplateQuery } from '../../types/generated';

export default function DesignTemplate({ data }: PageProps<DesignsTemplateQuery>) {
  const { design, images } = data;
  const { name, description } = design as Required<DesignsTemplateQuery['design']>;

  const tags = design?.tags ?? [];

  return [
    <SEO key={`seo-design-${name}`} title={name as any} tags={tags as any} description={description as any} />,
    <Container smFlush>
      <Text variant="title">{name}</Text>
      <Text>{description}</Text>

      {tags && (
        <div>
          <div>tags</div>
          <Tags tags={tags as string[]} />
        </div>
      )}

      {images.nodes.map((image, index) => (
        <Img key={`${name}-image-${index}`} fluid={image?.childImageSharp?.fluid as any} draggable={false} />
      ))}
    </Container>,
  ];
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

    images: allFile(filter: { relativePath: { regex: $slug }, sourceInstanceName: { eq: "designs" } }) {
      nodes {
        id
        name
        childImageSharp {
          ...FluidImage
        }
      }
      totalCount
    }
  }
`;
