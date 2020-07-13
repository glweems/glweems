import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import { CreateBlogPostPagesQuery } from '../../src/queries';

export default async function createBlogPostPages({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) {
  const result = await graphql<CreateBlogPostPagesQuery>(`
    query CreateBlogPostPages {
      posts: allFile(
        filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        nodes {
          extension
          childMarkdownRemark {
            frontmatter {
              path
            }
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

  blogPosts?.forEach(({ childMarkdownRemark: post }) => {
    actions.createPage({
      path: `/blog${post.frontmatter.path}`,
      component: path.resolve(`src/templates/BlogPostTemplate.tsx`),
      context: {
        slug: post.frontmatter.path,
      },
    });
  });
}
