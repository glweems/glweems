import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Repository from './Repository'

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        github {
          viewer {
            pinnedRepositories(last: 4) {
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
      } = data
      const repos = edges.map(edge => edge.node)
      const RepoCards = () =>
        repos.map((repo, index) => (
          <Repository key={index} {...repo}>
            {repo.name}
          </Repository>
        ))
      return (
        <RepoGrid>
          <RepoCards />
        </RepoGrid>
      )
    }}
  />
)
