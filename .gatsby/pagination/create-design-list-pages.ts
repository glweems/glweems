import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import config from '../config';
import { paginate } from 'gatsby-awesome-pagination';
import { DesignCountQuery } from '../../src/types/generated';

export default async function createDesignListPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;

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

  const { itemsPerPage } = config;

  paginate({
    createPage,
    items: result.data.allDesignsYaml.nodes,
    itemsPerPage,
    pathPrefix: '/designs',
    component: path.resolve('src/templates/DesignListTemplate.tsx'),
    context: {
      hi: 'hi'
    }
  });
}
