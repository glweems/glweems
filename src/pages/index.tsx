/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import { Fade } from 'react-reveal';
import Card from '../components/Card';
import styles from '../styles/components/indexPage.module.scss';
import About from '../components/About';

const IndexPage = () => {
  const { behanceImages, markdownFiles, github, allBehanceProjects } = useIndexPageQuery();

  const mergedBehance = allBehanceProjects.nodes.map(node => {
    const found: any = behanceImages.nodes.find(
      (imageNode: { relativeDirectory: string }) => imageNode.relativeDirectory === node.slug,
    );
    return { ...node, fluid: found.childImageSharp.fluid, fixed: found.childImageSharp.fixed };
  });

  return (
    <div className={styles.indexPage}>
      <section className="container">
        <About />
      </section>

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
    allBehanceProjects,
  }: IndexPageQuery = useStaticQuery(graphql`
    query IndexPageQuery {
      allBehanceProjects(filter: { stats: { views: { gte: 20 } } }, limit: 4) {
        nodes {
          slug
          tags
          name
          description
        }
      }
      behanceImages: allFile(
        filter: { sourceInstanceName: { eq: "behanceImages" }, name: { eq: "cover" } }
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
    allBehanceProjects,
  };
};
