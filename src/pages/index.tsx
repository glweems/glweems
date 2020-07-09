import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Card from '../components/Card';
import Img from 'gatsby-image';
import Heatmap from '../components/Heatmap';
import styled from 'styled-components';
import { IndexPageQuery } from '../queries';
import Container from '../components/Common/Container';

export default function IndexPage({ data }: PageProps<IndexPageQuery>) {
  return (
    <React.Fragment>
      <Section>
        <h2>Blog Posts</h2>
        {data.posts.nodes.map(({ frontmatter, ...post }) => {
          return (
            <Card
              key={post.id}
              title={frontmatter.title}
              excerpt={post.excerpt}
              date={frontmatter.date}
              path={`/blog${frontmatter.path}`}
              Image={
                <Img
                  draggable={false}
                  alt={frontmatter.title}
                  {...frontmatter.thumbnail.childImageSharp}
                />
              }
            />
          );
        })}
      </Section>

      <Section>
        <h2>Designs</h2>

        {data.designs.nodes.map(({ name, ...design }, index) => {
          return (
            <Card
              key={design.slug}
              path={`/design/${design.slug}`}
              excerpt={design.description}
              title={name}
              Image={
                <Img
                  draggable={false}
                  alt={`${name} thumbnail image`}
                  {...design.fields.thumbnail.childImageSharp}
                />
              }
            />
          );
        })}
      </Section>

      <Section>
        {data.allGithubPinneditems.nodes.map((pinned) => (
          <Card
            key={pinned.name}
            title={pinned.name}
            excerpt={pinned.description}
            date={pinned.createdAt}
            Image={<img src={pinned.openGraphImageUrl} alt={pinned.name} />}
          />
        ))}
      </Section>

      <Section>
        <Heatmap />
      </Section>
    </React.Fragment>
  );
}

const Section = styled(Container)`
  padding: ${({ theme }) => theme.space[2]};
`;

(Section as any).defaultProps = { as: 'section' };

export const Query = graphql`
  query IndexPage($limit: Int = 3) {
    posts: allMarkdownRemark(
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...BlogPostCard
      }
    }

    designs: allDesignsYaml(limit: $limit, sort: { fields: slug, order: ASC }) {
      nodes {
        ...DesignCard
      }
    }

    allGithubPinneditems(limit: $limit) {
      nodes {
        primaryLanguage {
          name
          color
        }
        openGraphImageUrl
        name
        url
        createdAt(formatString: "MMMM YYYY")
        description
        homepageUrl
        id
      }
    }
  }
`;
