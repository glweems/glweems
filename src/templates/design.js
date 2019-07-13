import { Container } from 'elements'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import SEO from '@/seo'

const DesignTemplate = ({ data }) => {
  const { name, tags, description, modules } = data.behanceProjects

  const Images = () =>
    modules
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
    <Container>
      <SEO title="All Designs" keywords={tags} description={description} />
      <h1>{name}</h1>
      <h3>{description}</h3>
      <Images />
    </Container>
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
