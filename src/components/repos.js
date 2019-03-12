import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '@/index';
import Theme from 'src/Theme';

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  div {
    background: ${Theme.colors.light};
  }
`;

function Repository(props) {
  Repository.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    homepageUrl: PropTypes.string,
    primaryLanguage: PropTypes.shape({
      name: PropTypes.string,
    }),
  };

  const { name, description, url, primaryLanguage, homepageUrl } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{url}</p>
      <p>{homepageUrl}</p>
      <p>{primaryLanguage.name}</p>
    </div>
  );
}

export default class Repos extends Component {
  static propTypes = {
    data: PropTypes.shape({
      github: PropTypes.shape({
        viewer: PropTypes.shape({
          pinnedRepositories: PropTypes.shape({
            primaryLanguage: PropTypes.shape({
              name: PropTypes.string,
            }),
          }),
        }),
      }),
    }),
  };

  constructor({ data }) {
    super();
    this.state = {
      repos: data.github.viewer.pinnedRepositories.edges.map(repo => repo.node),
    };
    console.table(this.state.repos);
  }

  render() {
    const { repos } = this.state;
    const RepoCards = () =>
      repos.map((repo, index) => (
        <Repository key={index} {...repo}>
          {repo.name}
        </Repository>
      ));
    return (
      <Container>
        <RepoGrid>
          <RepoCards />
        </RepoGrid>
      </Container>
    );
  }
}
