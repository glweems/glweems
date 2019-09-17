// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

// Create Pages
exports.createPages = ({ actions, graphql }) => {
  return graphql(`
    query CreatePagesQuery {
      allBehanceProjects {
        nodes {
          slug
        }
      }
      allMdx {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)
    .then(({ data: { allBehanceProjects, allMdx } }) => {
      // Create Behance Pages
      allBehanceProjects.nodes.forEach(({ slug }) => {
        actions.createPage({
          path: `/${slug}`,
          component: path.resolve(`src/templates/design.tsx`),
          context: { slug: `/${slug}/` },
        });
      });

      // Create Posts Pages
      allMdx.nodes.forEach(({ frontmatter }) => {
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
