import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Card from '../components/Card';
import Img from 'gatsby-image';
import Heatmap from '../components/Heatmap';
import styled from 'styled-components';
import { IndexPageQuery } from '../queries';
import Container from '../components/Common/Container';
import { breakpoints } from '../theme';

export default function IndexPage({ data }: PageProps<IndexPageQuery>) {
  return (
    <React.Fragment>
      <Section>
        <h2>Blog Posts</h2>
        {data.posts.nodes.map(
          ({ childMarkdownRemark: { frontmatter, ...post } }) => {
            const blogSources = [
              frontmatter.thumbnail.sm.fixed,
              {
                ...frontmatter.thumbnail.md.fixed,
                media: `(min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
              },
              {
                ...frontmatter.thumbnail.lg.fixed,
                media: `(min-width: ${breakpoints[2]})`,
              },
            ];
            return (
              <Card
                key={post.id}
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                date={frontmatter.date}
                path={`/blog${frontmatter.path}`}
                Image={
                  <Img
                    draggable={false}
                    alt={frontmatter.title}
                    fixed={blogSources}
                  />
                }
              />
            );
          }
        )}
      </Section>

      <Section>
        <h2>Designs</h2>

        {data.designs.nodes.map(({ name, ...design }, index) => {
          const designSources = [
            design.fields.thumbnail.sm.fixed,
            {
              ...design.fields.thumbnail.md.fixed,
              media: `(min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
            },
            {
              ...design.fields.thumbnail.lg.fixed,
              media: `(min-width: ${breakpoints[2]})`,
            },
          ];
          return (
            <Card
              key={design.slug}
              path={`/design/${design.slug}`}
              subtitle={design.description}
              title={name}
              Image={
                <Img
                  draggable={false}
                  alt={`${name} thumbnail image`}
                  fixed={designSources}
                />
              }
            />
          );
        })}
      </Section>

      <Section>
        {data.allGithubPinneditems.nodes.map((pinned) => {
          const githubSources = [
            pinned.thumbnail.sm.fixed,
            {
              ...pinned.thumbnail.md.fixed,
              media: `(min-width: ${breakpoints[1]}) and (max-width: ${breakpoints[2]})`,
            },
            {
              ...pinned.thumbnail.lg.fixed,
              media: `(min-width: ${breakpoints[2]})`,
            },
          ];
          return (
            <Card
              key={pinned.name}
              title={pinned.name}
              subtitle={pinned.description}
              date={pinned.createdAt}
              Image={
                <Img
                  draggable={false}
                  alt={`${pinned.name} thumbnail image`}
                  fixed={githubSources}
                />
              }
            />
          );
        })}
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
    posts: allFile(
      limit: $limit
      filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        childMarkdownRemark {
          ...BlogPostCard
        }
      }
    }

    designs: allDesignsYaml(limit: $limit, sort: { fields: slug, order: ASC }) {
      nodes {
        ...DesignCard
      }
    }

    allGithubPinneditems(limit: $limit) {
      nodes {
        ...GithubCard
      }
    }
  }
`;
