const path = require('path')

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
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
          path: node.frontmatter.path,
          component: path.resolve(`src/templates/blog-template.js`),
          context: {},
        })
      })
    })
    .catch(err => {
      throw new Error(err)
    })
