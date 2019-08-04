/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Card from '../components/Card';
import About from '../components/About';
import { media } from '../utils/theme';

const IndexPage = () => {
  const { behanceImages, markdownFiles, allBehanceProjects } = useIndexPageQuery();

  const mergedBehance = allBehanceProjects.nodes.map(node => {
    const found: any = behanceImages.nodes.find((imageNode: { relativeDirectory: string }) =>
      imageNode.relativeDirectory.includes(node.slug),
    );
    return { ...node, ...found.childImageSharp };
  });

  const Section = styled(Container)`
    border-top: 2px solid ${({ theme }) => theme.blue};
  `;

  const Cards = styled.div`
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    ${media.greaterThan('sm')`
    grid-template-columns: repeat(2, 1fr);
    `}
    ${media.greaterThan('lg')`
    grid-template-columns: repeat(3, 1fr);
    `}
  `;

  return (
    <div>
      <Container>
        <About />
      </Container>

      <Section>
        <h2>Blog Posts</h2>
        <Cards>
          {markdownFiles.nodes.map(({ id, childMarkdownRemark }) => (
            <Card
              key={id}
              title={childMarkdownRemark.frontmatter.title}
              subtitle={childMarkdownRemark.excerpt}
              tags={childMarkdownRemark.frontmatter.tags}
              link={`tutorials/${childMarkdownRemark.frontmatter.path}`}
              img={childMarkdownRemark.frontmatter.thumbnail.childImageSharp}
            />
          ))}
        </Cards>
      </Section>

      <Section>
        <h2>Design Projects</h2>
        <Cards>
          {mergedBehance.map(node => (
            <Card
              key={node.slug}
              title={node.name}
              subtitle={node.description}
              img={node}
              tags={node.tags}
              link={`designs/${node.slug}`}
            />
          ))}
        </Cards>
      </Section>
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
