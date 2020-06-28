import { CreatePagesArgs } from 'gatsby';
import path from 'path';

export default async function createBlogPostPages({ graphql, actions, reporter }: CreatePagesArgs) {
  const result = await graphql<any>(`
    query CreateBlogPostPages {
      posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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

  // Create Blog Posts
  reporter.activityTimer('Creating Blog Post Pages').start();

  const blogPosts = result?.data?.posts.nodes;

  blogPosts?.forEach(({ frontmatter }, index) => {
    actions.createPage({
      path: frontmatter.path,
      component: path.resolve(`src/templates/BlogPost/BlogPostTemplate.tsx`),
      context: {
        slug: frontmatter.path,
        prev: blogPosts[index - 1] && blogPosts[index - 1].frontmatter.path,
        next: blogPosts[index + 1] && blogPosts[index + 1].frontmatter.path
      }
    });
  });

  reporter.activityTimer(`Created ${result.data.posts.nodes.length} blog post pages`).end();
}
