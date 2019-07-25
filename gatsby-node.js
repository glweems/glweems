const path = require(`path`);
const slugify = require(`slugify`);
/*
const useCreatePagesQuery = () =>
  useStaticQuery(graphql`
    query CreatePagesQuery {
      allBehanceProjects {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

exports.createPages = ({ actions, graphql }) => {
  const data = useCreatePagesQuery();console.log('TCL: exports.createPages -> data', data);
};
 */
exports.createPages = ({ actions, graphql }) => {
  return graphql(`
    query CreatePagesQuery {
      allBehanceProjects {
        edges {
          node {
            id
            slug
          }
        }
      }
      allGitRemote {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      // Create Behance Pages
      result.data.allBehanceProjects.edges.forEach(({ node }) => {
        actions.createPage({
          path: `/designs/${node.slug}`,
          component: path.resolve(`src/templates/design.tsx`),
          context: { slug: node.slug },
        });
      });

      // Create Git Pages
      result.data.allGitRemote.edges.forEach(({ node }) => {
        actions.createPage({
          path: `/tutorials/${node.name}`,
          component: path.resolve(`src/templates/tutorial.tsx`),
          context: { slug: `/${node.name}/` },
        });
      });
    })
    .catch(err => {
      throw new Error(err);
    });
};
