/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Card from '../components/Card';
import styles from '../styles/components/indexPage.module.scss';
import About from '../components/About';

const IndexPage = () => {
  const { behanceImages, markdownFiles, github, allBehanceProjects } = useIndexPageQuery();

  const mergedBehance = allBehanceProjects.nodes.map(node => {
    const found: any = behanceImages.nodes.find((imageNode: { relativeDirectory: string }) =>
      imageNode.relativeDirectory.includes(node.slug),
    );
    return { ...node, ...found.childImageSharp };
  });

  const Section = styled.section`
    border-top: 2px solid ${({ theme }) => theme.blue};
  `;

  return (
    <div className={styles.indexPage}>
      <Section className="container">
        <About />
      </Section>

      <Section className="container">
        <div>
          <h2>Blog Posts</h2>
          <div className={styles.cards}>
            {markdownFiles.nodes.map(({ id, childMarkdownRemark }) => (
              <Card
                key={id}
                title={childMarkdownRemark.frontmatter.title}
                subtitle={childMarkdownRemark.excerpt}
                tags={childMarkdownRemark.frontmatter.tags}
                link={`tutorials/${childMarkdownRemark.frontmatter.path}`}
                img={childMarkdownRemark.frontmatter.thumbnail.childImageSharp}
              >
                {/* <div className="tags">
                  {node.childMarkdownRemark.frontmatter.tags.map(tag => (
                    <small className="tag">{tag}</small>
                  ))}
                </div> */}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <section className="container">
        <h2>Design Projects</h2>
        <div className={styles.cards}>
          {mergedBehance.map(node => (
            <Card
              key={node.slug}
              title={node.name}
              subtitle={node.description}
              img={node}
              tags={node.tags}
              link={`designs/${node.slug}`}
            >
              {/* <div className="tags">
                {node.tags.map(tag => (
                  <small className="tag">{tag.toLowerCase()}</small>
                ))}
              </div> */}
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
            # fixed(width: 300, height: 150) {
            #   ...GatsbyImageSharpFixed
            # }
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_noBase64
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
            excerpt(pruneLength: 100)
            frontmatter {
              title
              path
              date
              subtitle
              tags
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_noBase64
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
