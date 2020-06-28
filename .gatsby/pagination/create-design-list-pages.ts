import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import config from '../config';
import { paginate } from 'gatsby-awesome-pagination';
import { DesignCountQuery } from '../../src/types/generated';
const { itemsPerPage } = config;

export default async function createDesignListPages({ graphql, actions: { createPage }, reporter }: CreatePagesArgs) {
  const result = await graphql<DesignCountQuery>(`
    query DesignCount {
      allDesignsYaml {
        nodes {
          id
        }
        totalCount
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  paginate({
    createPage,
    items: result.data.allDesignsYaml.nodes,
    itemsPerPage,
    pathPrefix: '/designs',
    component: path.resolve('src/templates/DesignListTemplate.tsx')
  });
}
