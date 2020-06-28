import { CreatePagesArgs } from 'gatsby';
import path from 'path';

export default async function createBlogPostPages({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) {
  const result = await graphql<any>(`
    query CreateBlogPostPages {
      posts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogPosts = result?.data?.posts.nodes;

  blogPosts?.forEach(({ frontmatter }, index) => {
    actions.createPage({
      path: `/blog${frontmatter.path}`,
      component: path.resolve(`src/templates/BlogPostTemplate.tsx`),
      context: {
        slug: frontmatter.path,
        prev: blogPosts?.[index - 1]?.frontmatter?.path ?? null,
        next: blogPosts?.[index + 1]?.frontmatter?.path ?? null,
      },
    });
  });
}
