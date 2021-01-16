import {
  CreateNodeArgs,
  GatsbyNode,
  PluginOptions,
  SetFieldsOnGraphQLNodeTypeArgs,
} from 'gatsby'
import { GraphQLString } from 'graphql'
import { DesignsYaml, MarkdownRemark } from '../src/queries'
import createBlogPostPages from './pages/create-blog-pages'
import createDesignPages from './pages/create-design-pages'
import createDesignListPages from './pagination/create-design-list-pages'
import createPostsPages from './pagination/create-post-list-pages'
import { fmImagesToRelative } from 'gatsby-remark-relative-images-v2'

export const setFieldsOnGraphQLNodeType: GatsbyNode['setFieldsOnGraphQLNodeType'] = async (
  args: SetFieldsOnGraphQLNodeTypeArgs,
  options: PluginOptions
) => {
  if (args.type.name === `MarkdownRemark`) {
    return {
      url: {
        type: GraphQLString,
        resolve: (source: MarkdownRemark) =>
          `https://glweems.com/blog${source.frontmatter.path}`,
      },
      disqusIdentifier: {
        type: GraphQLString,
        resolve: (source: MarkdownRemark) => String(source.frontmatter.path),
      },
      editOnGithub: {
        type: GraphQLString,
        resolve: (source: MarkdownRemark) =>
          `https://github.com/glweems/glweems/blob/master/posts${source.frontmatter.path}/index.md`,
      },
    }
  }

  if (args.type.name === `DesignsYaml`) {
    return {
      url: {
        type: GraphQLString,
        resolve: (source: DesignsYaml) =>
          `https://glweems.com/design/${source.slug}`,
      },
      tbn: {
        type: GraphQLString,
        resolve: (source: DesignsYaml) => `./${source.slug}/cover.jpg`,
      },
    }
  }
  // by default return empty object
  return {}
}

export const onCreateNode = ({
  node,
  getNode,
  actions,
}: CreateNodeArgs<DesignsYaml>) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === 'DesignsYaml') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'thumbnail',
      value: `./${node.slug}/cover.jpg`,
    })
  }
  fmImagesToRelative(node)
}

// Create Pages
export const createPages: GatsbyNode['createPages'] = async (gatsbyNode) => {
  await createBlogPostPages(gatsbyNode)
  await createPostsPages(gatsbyNode)
  await createDesignPages(gatsbyNode)
  await createDesignListPages(gatsbyNode)
}
