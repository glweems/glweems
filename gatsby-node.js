/* eslint-disable consistent-return */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

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
          path: `/designs/${slug}`,
          component: path.resolve(`src/templates/design.tsx`),
          context: { slug: `/${slug}/` },
        });
      });

      // Create Git Pages
      allGitRemote.nodes.forEach(({ name }) => {
        actions.createPage({
          path: `/tutorials/${name}`,
          component: path.resolve(`src/templates/tutorial.tsx`),
          context: { slug: `${name}` },
        });
      });
    })
    .catch(err => {
      throw new Error(err.message);
    });
};
