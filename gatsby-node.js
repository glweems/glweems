const path = require(`path`);
const slugify = require(`slugify`);

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    {
      allBehanceProjects {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allBehanceProjects.edges.forEach(({ node }) => {
        actions.createPage({
          path: `/designs/${node.slug}`,
          component: path.resolve(`src/templates/design.js`),
          context: { slug: node.slug },
        });
      });
    })
    .catch(err => {
      throw new Error(err);
    });
