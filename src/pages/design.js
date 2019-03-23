import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { PropTypes, Layout, SEO } from 'my-components'

import Card, { CardGrid } from '@/card'
import { Container } from 'src/Styled'

const Project = ({ name, description, covers: { size_808 } }) => (
  <div>
    <div>
      <div className="project-img">
        <img src={size_808} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  </div>
)

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  covers: PropTypes.shape({ size_115: PropTypes.string }),
}

export default class GraphicDesignPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allBehanceProjects: PropTypes.shape({ edges: PropTypes.array }),
    }),
  }

  render() {
    const {
      data: {
        allBehanceProjects: { edges },
      },
    } = this.props

    const nodes = [...edges.map(edge => [...{ ...edge.node }])]
    const projects = [...nodes.map(node => node[0])]

    const Projects = () =>
      projects.map((project, index) => (
        <Card
          key={index}
          body={project.description}
          title={project.name}
          img={project.covers.size_808}
        />
      ))
    return (
      <Layout>
        <SEO title="Graphic Design" />
        <Container fluid>
          <h1>Graphic Design Page</h1>
          <Link to="/">Go back to the homepage</Link>
          <CardGrid>
            <Projects />
          </CardGrid>
        </Container>
      </Layout>
    )
  }
}

export const GraphicDesignPageQuery = graphql`
  query {
    allBehanceProjects {
      edges {
        node {
          name
          created
          url
          areas
          tags
          description
          tools {
            id
          }
          covers {
            size_808
          }
          stats {
            views
            appreciations
            comments
          }
        }
      }
    }
  }
`
