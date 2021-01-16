import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import { CreateDesignPagesQuery } from '../../src/queries';

export default async function createDesignPages({
  graphql,
  actions: { createPage },
  reporter,
}: CreatePagesArgs) {
  const result = await graphql<CreateDesignPagesQuery>(`
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

  const designs = result?.data?.designs?.nodes;

  designs?.forEach(({ slug }, index) => {
    createPage({
      path: `/design/${slug}`,
      component: path.resolve(`src/templates/DesignTemplate.tsx`),
      context: {
        slug: `/${slug}/`,
        prev: designs[index - 1] && designs[index - 1].slug,
        next: designs[index + 1] && designs[index + 1].slug,
      },
    });
  });
}
