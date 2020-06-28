import { CreatePagesArgs } from 'gatsby';
import path from 'path';

export default async function createDesignPages({ graphql, actions: { createPage }, reporter }: CreatePagesArgs) {
  const result = await graphql<any>(`
    query CreateDesignPages {
      designs: allDesignsYaml {
        nodes {
          slug
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create Design Pages
  reporter.activityTimer('Creating Design Pages').start();

  const designs = result?.data?.designs?.nodes;

  designs?.forEach(({ slug }, index) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/Design/DesignTemplate.tsx`),
      context: {
        slug: `/${slug}/`,
        prev: designs[index - 1] && designs[index - 1].slug,
        next: designs[index + 1] && designs[index + 1].slug
      }
    });
  });

  reporter.activityTimer(`Created ${result.data.designs.nodes.length} designs post pages`).end();
}
