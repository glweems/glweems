import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '@/layout';
import SEO from '@/seo';
import Theme, { MQ, Container } from '../Theme';

console.log(MQ);

const GraphicDesignWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;

  ${MQ.mobileL(`
  grid-template-columns: repeat(2, 1fr);
  *:nth-last-child(1):nth-child(odd) { grid-column: 1 /-1; } `)}

  ${MQ.tablet(`grid-template-columns: repeat(3, 1fr); gap: 1.5rem;`)}

  ${MQ.laptop(`grid-template-columns: repeat(4, 1fr); gap: 2rem;`)}
`;

const StyledProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #bada55;
  align-content: flex-start;
  align-items: flex-start;
  img {
    width: 100%;
  }
  .project-img {
    flex-basis: 100%;
    height: auto;
  }
`;

const Project = ({ name, description, covers: { size_808 } }) => (
  <StyledProject>
    <div className="project-img">
      <img src={size_808} alt={name} />
    </div>
    <p>{name}</p>
    <p>{description}</p>
  </StyledProject>
);

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  covers: PropTypes.shape({ size_115: PropTypes.string }),
};

export default class GraphicDesignPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allBehanceProjects: PropTypes.shape({ edges: PropTypes.array }),
    }),
  };

  render() {
    const {
      data: {
        allBehanceProjects: { edges },
      },
    } = this.props;

    const nodes = [...edges.map(edge => [...{ ...edge.node }])];
    const projects = [...nodes.map(node => node[0])];

    const Projects = () =>
      projects.map((project, index) => <Project key={index} {...project} />);
    return (
      <Layout>
        <SEO title="Graphic Design" />
        <Container>
          <h1>Graphic Design Page</h1>
          <Link to="/">Go back to the homepage</Link>
          <GraphicDesignWrapper>
            <Projects />
          </GraphicDesignWrapper>
        </Container>
      </Layout>
    );
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
`;
