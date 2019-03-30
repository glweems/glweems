import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/layout'
import SEO from '@/seo'
import Card from '@/card'
import styled from 'styled-components'
import Theme from 'src/Theme'

const DesignGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  max-width: 100%;
`
const ProjectInfo = styled.div`
  max-width: 100%;
`

const ProjectImages = styled.div`
  img {
    width: 100%;
  }
`

const DesignTemplate = ({ data }) => {
  const {
    behanceProjects: { modules, name, description, tags },
  } = data
  const Images = () =>
    modules
      .filter(module => module.sizes !== null)
      .map((module, i) => (
        <img key={i} src={module.sizes.size_disp} alt={module.id} />
      ))

  return (
    <Layout>
      <SEO title="designs" />
      <DesignGrid>
        <ProjectInfo>
          <Card title={name} subtitle={description} tags={tags} />
        </ProjectInfo>
        <ProjectImages>
          <Images />
        </ProjectImages>
      </DesignGrid>
    </Layout>
  )
}

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Tags = styled.ul`
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  li {
    float: left;
  }
`
// const Tag = styled.li`
//   background: #eee;
//   border-radius: 3px 0 0 3px;
//   color: ${Theme.colors.secondary};
//   display: inline-block;
//   height: 26px;
//   line-height: 26px;
//   padding: 0 20px 0 23px;
//   position: relative;
//   margin: 0 10px 10px 0;
//   text-decoration: none;
//   -webkit-transition: color 0.2s;

//   ::before {
//     background: #fff;
//     border-radius: 10px;
//     box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
//     content: '';
//     height: 6px;
//     left: 10px;
//     position: absolute;
//     width: 6px;
//     top: 10px;
//   }

//   ::after {
//     background: #fff;
//     border-bottom: 13px solid transparent;
//     border-left: 10px solid #eee;
//     border-top: 13px solid transparent;
//     content: '';
//     position: absolute;
//     right: 0;
//     top: 0;
//   }

//   :hover {
//     background-color: ${Theme.colors.blue};
//     color: white;
//   }

//   :hover::after {
//     border-left-color: ${Theme.colors.blue};
//   }
// `
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
