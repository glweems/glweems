const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)
const path = require(`path`)
const slugify = require(`slugify`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
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
