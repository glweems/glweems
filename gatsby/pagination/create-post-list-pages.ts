import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import config from '../config';
import { BlogPostCountQuery } from '../../src/queries';
import { paginate } from 'gatsby-awesome-pagination';
const { itemsPerPage } = config;

export default async function createPostPages({
  graphql,
  actions: { createPage },
  reporter,
}: CreatePagesArgs) {
  const result = await graphql<BlogPostCountQuery>(`
    query BlogPostCount {
      posts: allFile(
        filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
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
    items: result.data.posts.nodes,
    itemsPerPage,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/blog' : '/blog/page'),
    component: path.resolve('src/templates/BlogPostListTemplate.tsx'),
  });

  return;
}
