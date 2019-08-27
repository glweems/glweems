/* eslint-disable consistent-return */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

const DESIGNS_PATH = 'designs';
const POSTS_PATH = 'posts';

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Create 'page' field for markdown
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `page`,
      value: `/${POSTS_PATH}/${node.frontmatter.path}`,
    });
  }

  // Create 'page' field behance projects
  if (node.internal.type === `behanceProjects`) {
    createNodeField({
      node,
      name: `page`,
      value: `/${DESIGNS_PATH}/${node.slug}`,
    });
  }
};

// Create Pages
exports.createPages = ({ actions, graphql }) => {
  return graphql(`
    query CreatePagesQuery {
      allBehanceProjects {
        nodes {
          slug
        }
      }
      allGitRemote {
        nodes {
          name
        }
      }
    }
  `)
    .then(({ data: { allBehanceProjects, allGitRemote } }) => {
      // Create Behance Pages
      allBehanceProjects.nodes.forEach(({ slug }) => {
        actions.createPage({
          path: `/${DESIGNS_PATH}/${slug}`,
          component: path.resolve(`src/templates/design.tsx`),
          context: { slug: `/${slug}/` },
        });
      });

      // Create Posts Pages
      allGitRemote.nodes.forEach(({ name }) => {
        actions.createPage({
          path: `/${POSTS_PATH}/${name}`,
          component: path.resolve(`src/templates/post.tsx`),
          context: { slug: `${name}` },
        });
      });
    })
    .catch(err => {
      throw new Error(err.message);
    });
};
