/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Card from '../components/Card';
import styles from '../styles/components/card.module.scss';
import About from '../components/About';

const IndexPage = () => {
  const { behanceImages, markdownFiles, github, allBehanceProjects } = useIndexPageQuery();

  const mergedBehance = allBehanceProjects.nodes.map(node => {
    const found: { childImageSharp: { fluid: {} } } = behanceImages.nodes.find(
      (imageNode: { relativeDirectory: string }) => imageNode.relativeDirectory === node.slug,
    );
    return { ...node, fluid: found.childImageSharp.fluid };
  });

  return (
    <div>
      <section className="container">
        <About />
      </section>

      <section className="container">
        <h2>Blog Posts</h2>
        <div className={styles.cards}>
          {markdownFiles.nodes.map(node => (
            <Card
              key={node.id}
              title={node.childMarkdownRemark.frontmatter.title}
              link={`tutorials/${node.childMarkdownRemark.frontmatter.path}`}
              img={node.childMarkdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
            />
          ))}
        </div>
      </section>
      <section className="container">
        <h2>Design Projects</h2>
        <div className={styles.cards}>
          {mergedBehance.map(node => (
            <Card
              key={node.slug}
              title={node.name}
              link={`designs/${node.slug}`}
              img={node.fluid}
            />
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
    query indexQuery {
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
            fluid(maxWidth: 700) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
