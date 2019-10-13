// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLString } = require(`gatsby/graphql`)

const path = require(`path`)

// Create Pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query CreatePagesQuery {
      allBehanceProjects {
        nodes {
          slug
        }
      }
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { allBehanceProjects, allMarkdownRemark } = result.data

  // Create Design Pages
  allBehanceProjects.nodes.forEach(({ slug }, index) => {
    actions.createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/Design/DesignTemplate.tsx`),
      context: {
        slug: `/${slug}/`,
        prev: allBehanceProjects.nodes[index - 1] && allBehanceProjects.nodes[index - 1].slug,
        next: allBehanceProjects.nodes[index + 1] && allBehanceProjects.nodes[index + 1].slug
      }
    })
  })

  // Create Blog Posts
  allMarkdownRemark.nodes.forEach(({ frontmatter }, index) => {
    actions.createPage({
      path: frontmatter.path,
      component: path.resolve(`src/templates/Blog/BlogTemplate.tsx`),
      context: {
        slug: frontmatter.path,
        prev: allMarkdownRemark.nodes[index - 1] && allMarkdownRemark.nodes[index - 1].frontmatter.path,
        next: allMarkdownRemark.nodes[index + 1] && allMarkdownRemark.nodes[index + 1].frontmatter.path
      }
    })
  })
  reporter.info(`${allBehanceProjects.nodes.length + allMarkdownRemark.nodes.length} pages created`)
}
