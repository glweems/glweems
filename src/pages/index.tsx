/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Microlink from '@microlink/react';
import Card from '../components/Card';
import styles from '../styles/components/card.module.scss';

const IndexPage = () => {
  const {
    github,
    allBehanceProjects: { edges },
  } = useIndexPageQuery();
  return (
    <>
      <section>
        <h1>Hello World!</h1>
        <p>Gatsby is the best!</p>
      </section>
      <section>
        {github.viewer.pinnedItems.nodes.map(edge => (
          <div>
            {edge.name}
            <Microlink url={edge.homepageUrl} size="large" />
          </div>
        ))}
      </section>
      <section className="container">
        <h1>Design Projects</h1>
        <div className={styles.cards}>
          {edges.map(({ node }: { node: BehanceProject }) => {
            const { name, slug, covers } = node;
            return (
              <Card
                key={name}
                title={name}
                img={covers.size_max_808}
                link={`/designs/${slug}`}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default IndexPage;

interface Repository {
  id: string;
  name: string;
  url: string;
  updatedAt: string;
  description: string;
  homepageUrl: string;
  languages: {
    nodes: {
      color: string;
      id: string;
      name: string;
    }[];
  };
}
interface UseIndexPageQuery {
  allBehanceProjects: Edges<BehanceProject>;
  github: {
    viewer: {
      pinnedItems: {
        nodes: Repository[];
      };
    };
  };
}
const useIndexPageQuery = (): UseIndexPageQuery => {
  const data = useStaticQuery(graphql`
    query indexQuery {
      # Github Repos
      github {
        viewer {
          pinnedItems(first: 6) {
            nodes {
              ... on GitHub_Repository {
                id
                name
                url
                updatedAt
                description
                homepageUrl
                languages(first: 4, orderBy: { field: SIZE, direction: DESC }) {
                  nodes {
                    color
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
      # Behance Projects
      allBehanceProjects(filter: { stats: { views: { gte: 20 } } }, limit: 4) {
        edges {
          node {
            id
            name
            slug
            description
            covers {
              size_max_808
            }
            tags
          }
        }
      }
    }
  `);
  return data;
};
