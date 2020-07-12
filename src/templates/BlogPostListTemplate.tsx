import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Card from '../components/Card';
import Container from '../components/Common/Container';
import Pager, { PagerProps } from '../components/Pager';
import SEO from '../components/SEO';
import { BlogListQuery } from '../queries';
import { breakpoints } from '../theme';

export interface PageContext extends PagerProps {
  pageNumber: number;
  humanPageNumber: number;
  skip: number;
  limit: number;
  numberOfPages: number;
}

export default function ArticleListTemplate({
  data,
  pageContext,
}: PageProps<BlogListQuery, PageContext>) {
  return (
    <React.Fragment>
      <SEO
        title={`Blog Posts Results ${pageContext.pageNumber} of ${pageContext.numberOfPages}`}
      />

      <Container>
        {data.posts.nodes.map(({ frontmatter, ...post }) => {
          const sources = [
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
                  alt={`${frontmatter.title} thumbnail image`}
                  fixed={sources}
                />
              }
            />
          );
        })}
      </Container>

      <Pager
        previousPagePath={pageContext.previousPagePath}
        nextPagePath={pageContext.nextPagePath}
      />
    </React.Fragment>
  );
}

export const Query = graphql`
  query BlogList($skip: Int, $limit: Int) {
    posts: allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        ...BlogPostCard
      }
    }
  }
`;
