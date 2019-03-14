import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Project = project => (
  <div>
    {/* <Img fluid={project.covers.size_original} alt={project.name} /> */}
    {/* <Img
      fluid={project.covers.size_original.childImageSharp.fluid}
      alt={project.name}
    /> */}
    <p>{project.name}</p>
    {/* {JSON.stringify(project.covers.size_original)} */}
  </div>
);

export default class GraphicDesignPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allBehanceProjects: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  };

  render() {
    const { data } = this.props;
    const { allBehanceProjects } = data;
    const { edges } = allBehanceProjects;
    const nodes = [...edges.map(edge => [...{ ...edge.node }])];
    const projects = [...nodes.map(node => node[0])];

    console.log(projects);
    const Projects = () =>
      projects.map((project, index) => (
        <Project key={index} {...project}>
          hi
        </Project>
      ));
    return (
      <Layout>
        <SEO title="Graphic Design" />
        <h1>Graphic Design Page</h1>
        <Link to="/">Go back to the homepage</Link>
        <Projects />
      </Layout>
    );
  }
}

export const BehanceQuery = graphql`
  query {
    allBehanceProjects {
      edges {
        node {
          id

          name
          projectID
          published
          created
          modified
          conceived
          url
          privacy
          areas
          tags
          description
          tools {
            id
          }
          covers {
            size_115
            size_202
            size_230
            size_404
            size_808
            size_max_808
            size_original
          }
          owners {
            id
          }
          stats {
            views
            appreciations
            comments
          }
          modules {
            sizes {
              size_original
            }
          }
        }
      }
    }
  }
`;
