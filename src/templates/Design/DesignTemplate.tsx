import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import { BehanceProject, ImageFile } from '../..'
import { Container, Text } from '../../components/Common'
import SEO from '../../components/SEO'

interface DesignTemplate {
  data: {
    design: BehanceProject
    images: {
      nodes: ImageFile[]
      totalCount: number
    }
  }
}

interface ImageGridProps {
  evenNum: boolean
  miniGallery: boolean
  fullGallery: boolean
}

export default function DesignTemplate({ data }: DesignTemplate) {
  const { design, images } = data
  const { name, tags, description } = design
  return (
    <React.Fragment>
      <SEO key={`seo-design-${name}`} title={name} tags={tags} description={description} />,
      <Container smFlush>
        <Text variant="title">{design.name}</Text>
        <Text>{design.description}</Text>
        <div>tags</div>
        {design.tags.map((tag, index) => (
          <div>{tag}</div>
        ))}
        <div>tools</div>
        {design.tools.map(tool => (
          <div>{tool.title}</div>
        ))}
        {images.nodes.map(image => (
          <Img fluid={image.childImageSharp.fluid} />
        ))}
      </Container>
    </React.Fragment>
  )
}

export const designQuery = graphql`
  query SingleDesign($slug: String!) {
    design: behanceProjects(slug: { regex: $slug }) {
      ...BehanceCard
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
`
