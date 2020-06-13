import { GatsbyNode } from 'gatsby'
import { GraphQLString } from 'gatsby/graphql'
import * as path from 'path'
import { siteMetadata } from './gatsby-config'

export const setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `MarkdownRemark`) {
    return {
      url: {
        type: GraphQLString,
        resolve: (source: any) => `${siteMetadata.siteUrl}${source.frontmatter.path}`
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
/* export const createPagesExample: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`../src/templates/blog-post.tsx`)
  const result = await graphql<any>(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }
}
 */
// Create Pages
export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage }, graphql, reporter }) => {
  const result = await graphql<any>(`
    query CreatePagesQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            path
          }
        }
      }

      allBehanceProjects: allDesignsYaml {
        nodes {
          slug
        }
      }

      blogTags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }

      designTags: allDesignsYaml(limit: 2000) {
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
  const blogPostComponent = path.resolve(`src/templates/BlogPost/BlogPostTemplate.tsx`)
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
  const designs: any = result.data.allBehanceProjects.nodes
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

  /*
 * Tag Pages


  // Extract tag data from query
  const { blogTags, designTags, sideProjectTags } = result.data
  // Combine all tags
  const tags = [...blogTags.group, ...designTags.group, ...sideProjectTags.group].reduce((acc, d) => {
    const found = acc.find(a => a.tag === d.tag)

    if (found) {
      found.tag = kebabCase(found.tag)
    }
    acc.push({ tag: kebabCase(d.tag), qty: d.qty })

    return acc
  }, [])

  // Component for each page
  const tagComponent = path.resolve(`src/templates/Tags/TagsTemplate.tsx`)
  // Make tag pages
  tags.forEach(({ tag }) => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: tagComponent,
      context: { tag }
    })
  })
 */
}
