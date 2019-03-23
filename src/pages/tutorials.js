import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Layout, SEO } from 'my-components'

import Card, { CardGrid } from '@/card'
import { Container } from 'src/Styled'

export default class BlogPosts extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({ edges: PropTypes.array }),
    }),
  }

  render() {
    const {
      props: {
        data: {
          allMarkdownRemark: { edges },
        },
      },
    } = this

    const BlogPosts = () =>
      edges.map((edge, index) => {
        const {
          node: {
            frontmatter: { title, subtitle, path, html },
          },
        } = edge
        return (
          <Card key={index} title={title} subtitle={subtitle} link={path} />
        )
      })

    return (
      <Layout>
        <SEO title="posts" />
        <Container>
          <BlogPosts />
        </Container>
      </Layout>
    )
  }
}
//   render() {
//     const {
//       data: {
//         allBehanceProjects: { edges },
//       },
//     } = this.props;

//     const nodes = [...edges.map(edge => [...{ ...edge.node }])];
//     const projects = [...nodes.map(node => node[0])];

//     const Projects = () =>
//       projects.map((project, index) => (
//         <Card
//           key={index}
//           body={project.description}
//           title={project.name}
//           img={project.covers.size_808}
//         />
//       ));
//     return (
//       <Layout>
//         <SEO title="Graphic Design" />
//         <Container fluid>
//           <h1>Graphic Design Page</h1>
//           <Link to="/">Go back to the homepage</Link>
//           <CardGrid>
//             <Projects />
//           </CardGrid>
//         </Container>
//       </Layout>
//     );
//   }
// }

export const GraphicDesignPageQuery = graphql`
  query allBlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            subtitle
            git
          }
          html
          timeToRead
        }
      }
    }
  }
`
