import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import config from '../config';

export default async function createPostPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;

  const result = await graphql<any>(`
    query BlogPostCount {
      allMarkdownRemark {
        totalCount
      }
    }
  `);

  const { postsPerPage } = config;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/' : `/page/${i}`,
      component: path.resolve('src/templates/BlogListTemplate.tsx'),
      context: {
        currentPage: i,
        limit: postsPerPage,
        skip: i * postsPerPage,
        prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
}
