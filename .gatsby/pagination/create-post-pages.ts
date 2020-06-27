import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import config from '../config';
import { BlogPostCountQuery } from '../../src/types/generated';
import { paginate } from 'gatsby-awesome-pagination';

export default async function createPostPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;

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

  const { itemsPerPage } = config;
  const pathPrefix = ({ pageNumber, numberOfPages }) => (pageNumber === 0 ? '/' : '/page');
  paginate({
    createPage,
    items: result.data.allMarkdownRemark.nodes,
    itemsPerPage,
    pathPrefix,
    component: path.resolve('src/templates/BlogListTemplate.tsx')
  });
}
