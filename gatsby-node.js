const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const slugify = require(`slugify`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: `/tutorials${slug.replace(/\/README\//g, ``)}`,
    })
  }
  if (node.internal.type === `BehanceProjects`) {
    createNodeField({
      node,
      name: `slug`,
      value: slugify(node.name).toLowerCase(),
    })
  }
}
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
      allBehanceProjects {
        edges {
          node {
            id
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
        return Promise.reject(result.errors)
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        actions.createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/tutorial.js`),
          context: { slug: node.fields.slug },
        })
      })
      result.data.allBehanceProjects.edges.forEach(({ node }) => {
        actions.createPage({
          path: `/designs/${node.fields.slug}`,
          component: path.resolve(`src/templates/design.js`),
          context: { slug: node.fields.slug },
        })
      })
    })
    .catch(err => {
      throw new Error(err)
    })
