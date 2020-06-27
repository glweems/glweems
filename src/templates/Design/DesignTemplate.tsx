import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import { Container, Text } from '../../components/Common';
import SEO from '../../components/SEO';
import { DesignsTemplateQuery, DesignsTemplateQuery_design } from './_types/DesignsTemplateQuery';
import Tags from '../../components/Tags';
export default function DesignTemplate({ data }: { data: DesignsTemplateQuery }) {
  const { design, images } = data;
  const { name, description, tools } = design as Required<DesignsTemplateQuery_design>;

  const tags = design?.tags ?? [];

  return [
    <SEO key={`seo-design-${name}`} title={name as any} tags={tags as any} description={description as any} />,
    <Container smFlush>
      <Text variant="title">{name}</Text>
      <Text>{description}</Text>
      <div>tags</div>
      {tags && <Tags tags={tags as string[]} />}
      <div>tools</div>

      {images.nodes.map((image, index) => (
        <Img key={`${name}-image-${index}`} fluid={image?.childImageSharp?.fluid as any} draggable={false} />
      ))}
    </Container>
  ];
}

export const designQuery = graphql`
  query DesignsTemplateQuery($slug: String!) {
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
