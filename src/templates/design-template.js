import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/layout'
// import SEO from '@/seo'
import { Container } from 'src/Styled'
import styled from 'styled-components'
import Theme from 'src/Theme'

const DesignGrid = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  height: 98vh;
  grid-template-areas: 'info images';
`

const ProjectInfo = styled.div``
const ProjectImages = styled.div`
  grid-area: images;
  overflow: auto;
`

const Sticky = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  grid-area: info;
`

const DesignTemplate = ({ data }) => {
  const {
    behanceProjects: {
      modules,
      name,
      description,
      published,
      created,
      tags,
      tools: { title },
    },
  } = data
  const Images = () =>
    modules
      .filter(module => module.sizes !== null)
      .map(module => <img src={module.sizes.size_disp} alt={module.id} />)

  return (
    <Layout>
      <DesignGrid>
        <Sticky>
          <ProjectInfo>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{published}</p>
          </ProjectInfo>
        </Sticky>
        <ProjectImages>
          <Images />
        </ProjectImages>
      </DesignGrid>
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
