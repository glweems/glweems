const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: `/tutorials${slug.replace(/\/README\//g, ``)}`,
    });
  }
};
exports.createPages = ({ actions, graphql }) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        actions.createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/tutorial.js`),
          context: { slug: node.fields.slug },
        });
      });
    })
    .catch(err => {
      throw new Error(err);
    });
