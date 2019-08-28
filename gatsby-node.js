// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Create 'page' field for markdown
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `page`,
      value: node.frontmatter.path,
    });
  }

  // Create 'page' field behance projects
  if (node.internal.type === `behanceProjects`) {
    createNodeField({
      node,
      name: `page`,
      value: `/${node.slug}`,
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
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)
    .then(({ data: { allBehanceProjects, allMarkdownRemark } }) => {
      // Create Behance Pages
      allBehanceProjects.nodes.forEach(({ slug }) => {
        actions.createPage({
          path: `/${slug}`,
          component: path.resolve(`src/templates/design.tsx`),
          context: { slug: `/${slug}/` },
        });
      });

      // Create Posts Pages
      allMarkdownRemark.nodes.forEach(({ frontmatter }) => {
        actions.createPage({
          path: frontmatter.path,
          component: path.resolve(`src/templates/post.tsx`),
          context: { slug: frontmatter.path },
        });
      });
    })
    .catch(err => {
      throw new Error(err.message);
    });
};
