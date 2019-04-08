const path = require('path')
const slugify = require('slugify')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `tutorials` })
    const newSlug = slug.split('/README/')
    createNodeField({
      node,
      name: `slug`,
      value: `/tutorials${newSlug[0]}`,
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
            frontmatter {
              path
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
          component: path.resolve(`./src/templates/blog.js`),
          context: { slug: node.fields.slug },
        })
      })
      result.data.allBehanceProjects.edges.forEach(({ node }) => {
        actions.createPage({
          path: `/designs/${node.fields.slug}`,
          component: path.resolve(`./src/templates/design.js`),
          context: { slug: node.fields.slug },
        })
      })
    })
    .catch(err => {
      throw new Error(err)
    })
