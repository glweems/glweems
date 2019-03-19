import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from '@/index';
import Theme from 'src/Theme';
import '../../node_modules/@primer/css/dist/box.css';
import '../../node_modules/@primer/css/dist/buttons.css';
import '../../node_modules/@primer/css/dist/core.css';

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
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
    <div className="Box">
      <div className="Box-header d-flex flex-items-center">
        <h3 className="Box-title overflow-hidden flex-auto">{name}</h3>
        <button type="button" className="btn btn-primary btn-sm">
          <a href={url}>View</a>
        </button>
      </div>
      <div className="Box-body">
        <p>{description}</p>
        <p>{url}</p>
        <p>{homepageUrl}</p>
        <p>{primaryLanguage.name}</p>
      </div>
    </div>
  );
}

const Repos = () => (
  <StaticQuery
    query={graphql`
      query {
        github {
          viewer {
            pinnedRepositories(last: 20) {
              edges {
                node {
                  name
                  description
                  url
                  homepageUrl
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        github: {
          viewer: {
            pinnedRepositories: { edges },
          },
        },
      } = data;
      const repos = edges.map(edge => edge.node);
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
    }}
  />
);

// Repos.propTypes = {
//   data: PropTypes.object,
// };

// export const PinnedRepos = graphql`
//   query {
//     github {
//       viewer {
//         pinnedRepositories(last: 20) {
//           edges {
//             node {
//               name
//               description
//               url
//               homepageUrl
//               primaryLanguage {
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default Repos;

// export default class Repos extends Component {
//   static propTypes = {
//     data: PropTypes.shape({
//       github: PropTypes.shape({
//         viewer: PropTypes.shape({
//           pinnedRepositories: PropTypes.shape({
//             primaryLanguage: PropTypes.shape({
//               name: PropTypes.string,
//             }),
//           }),
//         }),
//       }),
//     }),
//   };

//   constructor({
//     data: {
//       github: {
//         viewer: {
//           pinnedRepositories: { edges },
//         },
//       },
//     },
//   }) {
//     super();
//     this.state = {
//       repos: edges.map(repo => repo.node),
//     };
//   }

//   render() {
//     const { repos } = this.state;
//     const RepoCards = () =>
//       repos.map((repo, index) => (
//         <Repository key={index} {...repo}>
//           {repo.name}
//         </Repository>
//       ));
//     return (
//       <Container>
//         <RepoGrid>
//           <RepoCards />
//         </RepoGrid>
//       </Container>
//     );
//   }
// }
