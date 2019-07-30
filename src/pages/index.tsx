/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { Fade } from 'react-reveal';
import Card from '../components/Card';
import styles from '../styles/components/indexPage.module.scss';
import About from '../components/About';

const IndexPage = () => {
  const { behanceImages, markdownFiles, github, allBehanceProject } = useIndexPageQuery();

  const mergedBehance = allBehanceProject.nodes.map(node => {
    const found: any = behanceImages.nodes.find((imageNode: { relativeDirectory: string }) =>
      imageNode.relativeDirectory.includes(node.slug),
    );
    return { ...node, fixed: found.childImageSharp.fixed };
  });

  return (
    <div className={styles.indexPage}>
      <section className="container">
        <About />
      </section>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gwtuts/react-peekaboo-navbar/tree/master/"
        className="sc-gqPbQI bRtYrO"
      >
        <div className="sc-cmthru fOsINE">
          <span className="sc-cLQEGU eshjaX">
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              // style="vertical-align: middle;"
            >
              <g>
                <path d="m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z" />
              </g>
            </svg>
          </span>
          <span className="sc-hMFtBS bIBrzt">gwtuts/react-peekaboo-navbar</span>
        </div>
      </a>
      <section className="container">
        <div>
          <h2>Blog Posts</h2>
          <div className={styles.cards}>
            {markdownFiles.nodes.map(node => (
              <Card
                key={node.id}
                title={node.childMarkdownRemark.frontmatter.title}
                link={`tutorials/${node.childMarkdownRemark.frontmatter.path}`}
                img={node.childMarkdownRemark.frontmatter.thumbnail.childImageSharp}
              >
                <div className="tags">
                  {node.childMarkdownRemark.frontmatter.tags.map(tag => (
                    <small className="tag">{tag}</small>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <h2>Design Projects</h2>
        <div className={styles.cards}>
          {mergedBehance.map(node => (
            <Card key={node.slug} title={node.name} link={`designs/${node.slug}`} img={node}>
              <div className="tags">
                {node.tags.map(tag => (
                  <small className="tag">{tag.toLowerCase()}</small>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

const useIndexPageQuery = (): IndexPageQuery => {
  const {
    github,
    behanceImages,
    markdownFiles,
    allBehanceProject,
  }: IndexPageQuery = useStaticQuery(graphql`
    query IndexPageQuery {
      allBehanceProject(filter: { stats: { views: { gte: 20 } } }, limit: 4) {
        nodes {
          slug
          name
          description
          tags
        }
      }
      behanceImages: allFile(
        filter: {
          relativeDirectory: { regex: "/gatsby-source-behance-images/" }
          name: { eq: "cover" }
        }
      ) {
        nodes {
          relativeDirectory
          childImageSharp {
            fixed(width: 300, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      markdownFiles: allFile(
        filter: { gitRemote__NODE: { ne: null }, childMarkdownRemark: { id: { ne: null } } }
      ) {
        nodes {
          id
          sourceInstanceName
          relativeDirectory
          childMarkdownRemark {
            frontmatter {
              title
              path
              date
              subtitle
              tags
              thumbnail {
                childImageSharp {
                  fixed(width: 300, height: 150) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
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
    }
  `);

  return {
    github,
    behanceImages,
    markdownFiles,
    allBehanceProject,
  };
};
