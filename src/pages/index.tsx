/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import Card, { Cards } from '../components/Card';
import About from '../components/About';
import { mergedBehance } from '../utils/helpers';

const Section = styled(Container)`
  border-top: 2px solid ${({ theme }) => theme.blue};
`;

const IndexPage = () => {
  const { behanceImages, markdownFiles, allBehanceProjects } = useIndexPageQuery();

  const behance = mergedBehance(allBehanceProjects.nodes, behanceImages.nodes);

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
          {behance.map(node => (
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

interface IndexPageQuery {
  markdownFiles: GQLNodes<MarkdownRemark>;
  behanceImages: GQLNodes<BehanceImage>;

  github: {
    viewer: {
      pinnedItems: GQLNodes<GithubRepository>;
    };
  };

  allBehanceProjects: GQLNodes<BehanceProject>;
}

const useIndexPageQuery = (): IndexPageQuery =>
  useStaticQuery(graphql`
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
            fluid(maxWidth: 700, traceSVG: { background: "#1a1e28", color: "#c6c7c6" }) {
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
                  fluid(maxWidth: 700, traceSVG: { background: "#1a1e28", color: "#c6c7c6" }) {
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
