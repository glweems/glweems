import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Article from '../components/Article';
import Pager, { PagerProps } from '../components/Pager';
import SEO from '../components/SEO';
import { BlogListQuery } from '../types/generated';

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

      {data.posts.nodes.map(({ frontmatter, ...post }) => {
        return (
          <Article
            key={post.id}
            title={frontmatter.title}
            excerpt={post.excerpt}
            date={frontmatter.date}
            path={`/blog${frontmatter.path}`}
            Image={
              <Img
                draggable={false}
                alt={`${frontmatter.title} thumbnail image`}
                fluid={frontmatter.thumbnail.childImageSharp.fluid}
              />
            }
          />
        );
      })}

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
        ...BlogPostArticle
      }
    }
  }
`;
