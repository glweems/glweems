import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import { Container, Text } from '../../components/Common';
import SEO from '../../components/SEO';
import { DesignsTemplateQuery, DesignsTemplateQuery_design } from './_types/DesignsTemplateQuery';

export default function DesignTemplate({ data }: { data: DesignsTemplateQuery }) {
  const { design, images } = data;
  const { name, tags, description, tools } = design as Required<DesignsTemplateQuery_design>;

  return [
    <SEO key={`seo-design-${name}`} title={name as any} tags={tags as any} description={description as any} />,
    <Container smFlush>
      <Text variant="title">{name}</Text>
      <Text>{description}</Text>
      <div>tags</div>
      {tags?.map((tag, index) => (
        <div>{tag}</div>
      ))}
      <div>tools</div>
      {tools?.map(tool => (
        <div>{tool?.title}</div>
      ))}
      {images.nodes.map(image => (
        <Img fluid={image?.childImageSharp?.fluid as any} />
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
