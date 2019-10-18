// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLString } = require(`gatsby/graphql`)
const path = require(`path`)
const _ = require('lodash')
const { siteMetadata } = require('./gatsby-config')

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `MarkdownRemark`) {
    return {
      url: {
        type: GraphQLString,
        resolve: source => `${siteMetadata.siteUrl}${source.frontmatter.path}`
      },
      disqusIdentifier: {
        type: GraphQLString,
        resolve: source => String(source.frontmatter.id)
      }
    }
  }

  // by default return empty object
  return {}
}

// Create Pages
exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const result = await graphql(`
    query CreatePagesQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            path
          }
        }
      }

      allBehanceProjects {
        nodes {
          slug
        }
      }

      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create Blog Posts
  const blogPosts = result.data.allMarkdownRemark.nodes
  const blogPostComponent = path.resolve(`src/templates/Post/index.tsx`)
  blogPosts.forEach(({ frontmatter }, index) => {
    createPage({
      path: frontmatter.path,
      component: blogPostComponent,
      context: {
        slug: frontmatter.path,
        prev: blogPosts[index - 1] && blogPosts[index - 1].frontmatter.path,
        next: blogPosts[index + 1] && blogPosts[index + 1].frontmatter.path
      }
    })
  })

  // Create Design Pages
  const designs = result.data.allBehanceProjects.nodes
  const designComponent = path.resolve(`src/templates/Design/DesignTemplate.tsx`)
  designs.forEach(({ slug }, index) => {
    createPage({
      path: `/${slug}`,
      component: designComponent,
      context: {
        slug: `/${slug}/`,
        prev: designs[index - 1] && designs[index - 1].slug,
        next: designs[index + 1] && designs[index + 1].slug
      }
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  const tagComponent = path.resolve(`src/templates/tags.tsx`)
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagComponent,
      context: {
        tag: tag.fieldValue
      }
    })
  })
}

/* // eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLString } = require(`gatsby/graphql`)
const path = require(`path`)
const _ = require('lodash')
const { siteMetadata } = require('./gatsby-config')

const createNavigation = (nodes, index) => {
  return {
    prev: nodes[index - 1] && nodes[index - 1].frontmatter.path,
    next: nodes[index + 1] && nodes[index + 1].frontmatter.path
  }
}

const createPrev = (nodes, index) => nodes[index - 1] && nodes[index - 1]
const createNext = (nodes, index) => nodes[index + 1] && nodes[index + 1]

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `MarkdownRemark`) {
    return {
      url: {
        type: GraphQLString,
        resolve: source => `${siteMetadata.siteUrl}${source.frontmatter.path}`
      },
      disqusIdentifier: {
        type: GraphQLString,
        resolve: source => String(source.frontmatter.id)
      }
    }
  }

  // by default return empty object
  return {}
}

// Create Pages
exports.createPages = async ({ actions: { createPage }, graphql, reporter }) => {
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
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { allBehanceProjects, allMarkdownRemark, tagsGroup } = result.data

  // ! Designs
  const designs = allBehanceProjects.nodes
  // * Create Pages
  designs.forEach(({ slug }, index) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/Design/DesignTemplate.tsx`),
      context: {
        slug: `/${slug}/`,
        prev: createPrev(designs, index).slug || '',
        next: createNext(designs, index).slug || ''
      }
    })
  })

  // ! Blog Post
  const posts = allMarkdownRemark.nodes

  // * Create Pages
  posts.forEach(({ frontmatter }, index) => {
    createPage({
      path: frontmatter.path,
      component: path.resolve(`src/templates/Post/index.tsx`),
      context: {
        slug: frontmatter.path,
        prev: createPrev(posts, index).frontmatter.path || '',
        next: createNext(posts, index).frontmatter.path || ''
      }
    })
  })

  // ! Tags
  const tags = tagsGroup.group
  console.log('TCL: tags', tags)
  // * Create Pages
  tags.forEach(({ tag }) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`src/templates/tags.tsx`),
      context: { tag }
    })
  })
  reporter.info(`${allBehanceProjects.nodes.length + allMarkdownRemark.nodes.length} pages created`)
}
 */
