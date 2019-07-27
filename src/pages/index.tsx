/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Microlink from '@microlink/react';
import Img from 'gatsby-image';
import Card from '../components/Card';
import styles from '../styles/components/card.module.scss';
import Avitar from '../components/Avitar';

const IndexPage = () => {
  const { allFile, github, allBehanceProjects } = useIndexPageQuery();
  return (
    <>
      <section>
        <h1>Hello World!</h1>
        <p>Gatsby is the best!</p>
        <Avitar />
      </section>
      <section className="container">
        <div className={styles.cards}>
          {allFile.nodes.map(({ childMarkdownRemark }) => (
            <Card
              title={childMarkdownRemark.frontmatter.title}
              link={`tutorials/${childMarkdownRemark.frontmatter.path}`}
            >
              <Img
                fluid={
                  childMarkdownRemark.frontmatter.thumbnail.childImageSharp
                    .fluid
                }
              />
            </Card>
          ))}
        </div>
      </section>
      <section className="container">
        <h1>Design Projects</h1>
        <div className={styles.cards}>
          {allBehanceProjects.edges.map(({ node }: BehanceProjectNode) => {
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
      <section>
        {github.viewer.pinnedItems.nodes.map((edge: PinnedItem) => (
          <div>
            {edge.name}
            <Microlink url={edge.homepageUrl} size="large" />
          </div>
        ))}
      </section>
    </>
  );
};

export default IndexPage;

const useIndexPageQuery = (): IndexPageData => {
  const {
    github,
    allFile,
    allBehanceProjects,
  }: IndexPageData = useStaticQuery(graphql`
    query indexQuery {
      # Tutorials
      allFile(
        filter: {
          gitRemote__NODE: { ne: null }
          childMarkdownRemark: { id: { ne: null } }
        }
      ) {
        nodes {
          sourceInstanceName
          childMarkdownRemark {
            fileAbsolutePath
            frontmatter {
              thumbnail {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
              }
              title
              tags
              path
            }
          }
        }
      }
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

      #   # Behance Projects
      #   allBehanceProjects(filter: {stats: {views: {gte: 20 } } }, limit: 4) {
      #     edges {
      #       node {
      #         id
      #         name
      #         slug
      #         description
      #         covers {
      #           size_max_808
      #         }
      #         tags
      #       }
      #     }
      #   }
    }
  `);

  return {
    github,
    allFile,
    allBehanceProjects,
  };
};
