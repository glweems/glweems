import { Container } from 'elements'

import Layout from '@/containers/layout'
import PropTypes from 'prop-types'
import React from 'react'
import SEO from '@/seo'
import { graphql } from 'gatsby'

const DesignTemplate = ({ data }) => {
  const Images = () =>
    data.behanceProjects.modules
      .filter(module => module.sizes !== null)
      .map((module, i) => (
        <img
          key={i}
          src={module.sizes.size_disp}
          alt={module.id}
          style={{ width: `100%` }}
        />
      ))

  return (
    <Layout>
      <Container>
        <SEO title='designs' />
        <h1>{data.behanceProjects.name}</h1>
        <h3 secondary>{data.behanceProjects.description}</h3>
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

DesignTemplate.propTypes = {
  data: PropTypes.object,
}
export default DesignTemplate
