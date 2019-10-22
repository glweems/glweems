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

      blogTags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }

      designTags: allBehanceProjects(limit: 2000) {
        group(field: tags) {
          tag: fieldValue
        }
      }

      sideProjectTags: allSideprojectsYaml(limit: 2000) {
        group(field: tags) {
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
  const { blogTags, designTags, sideProjectTags } = result.data
  // Combine all tags
  const tags = [...blogTags.group, ...designTags.group, ...sideProjectTags.group].reduce((acc, d) => {
    const found = acc.find(a => a.tag === d.tag)

    if (found) {
      found.qty += d.qty
      found.tag = _.kebabCase(found.tag)
    }
    acc.push({ tag: _.kebabCase(d.tag), qty: d.qty })

    return acc
  }, [])
  // Component for each page
  const tagComponent = path.resolve(`src/templates/tags.tsx`)
  // Make tag pages
  tags.forEach(({ tag }) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagComponent,
      context: { tag }
    })
  })
}
