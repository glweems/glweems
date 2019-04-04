import Layout from '@/layout'
import SEO from '@/seo'
import { Container, H1, H3 } from 'elements'
import { graphql } from 'gatsby'
import * as React from 'react'

const DesignTemplate = ({ data }) => {
  const Images = () =>
    data.behanceProjects.modules
      .filter(module => module.sizes !== null)
      .map((module, i) => (
        <img
          key={i}
          src={module.sizes.size_disp}
          alt={module.id}
          style={{ width: '100%' }}
        />
      ))

  return (
    <Layout>
      <Container>
        <SEO title="designs" />
        <H1>{data.behanceProjects.name}</H1>
        <H3 secondary={true}>{data.behanceProjects.description}</H3>
        <Images />
      </Container>
    </Layout>
  )
}

export const designQuery = graphql`
  query singleDesign($slug: String!) {
    behanceProjects(fields: { slug: { eq: $slug } }) {
      name
      description
      published
      created
      tags
      tools {
        title
      }
      areas
      modules {
        id
        project_id
        caption
        alignment
        image_src
        sizes {
          size_1400
          size_disp
          size_max_1240
          size_max_1920
          size_max_1200
          size_max_3840
          size_original
          size_2800
        }
      }
    }
  }
`
export default DesignTemplate
