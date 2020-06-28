import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import config from '../config';
import { BlogPostCountQuery } from '../../src/types/generated';
import { paginate } from 'gatsby-awesome-pagination';
const { itemsPerPage } = config;

export default async function createPostPages({ graphql, actions: { createPage }, reporter }: CreatePagesArgs) {
  const result = await graphql<BlogPostCountQuery>(`
    query BlogPostCount {
      allMarkdownRemark {
        totalCount
        nodes {
          id
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  reporter.activityTimer('Creating Blog List Pages').start();

  paginate({
    createPage,
    items: result.data.allMarkdownRemark.nodes,
    itemsPerPage,
    pathPrefix: ({ pageNumber, numberOfPages }) => (pageNumber === 0 ? '/' : '/page'),
    component: path.resolve('src/templates/BlogListTemplate.tsx')
  });

  reporter.activityTimer(`Created ${result.data.allMarkdownRemark.totalCount} Blog List Pagese`).end();
}
