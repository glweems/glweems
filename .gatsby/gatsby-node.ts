import {
  CreateNodeArgs,
  GatsbyNode,
  PluginOptions,
  SetFieldsOnGraphQLNodeTypeArgs,
} from 'gatsby';
import { GraphQLString } from 'graphql';
import { DesignsYaml, MarkdownRemark } from '../src/queries';
import createBlogPostPages from './pages/create-blog-pages';
import createDesignPages from './pages/create-design-pages';
  import createDesignListPages from './pagination/create-design-list-pages';
import createPostsPages from './pagination/create-post-list-pages';
import Axios from 'axios'

import Cheerio from 'cheerio'
import TurndownService from 'turndown'


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
    };
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
    };
  }
  // by default return empty object
  return {};
};

export const onCreateNode = ({
  node,
  getNode,
  actions,
}: CreateNodeArgs<DesignsYaml>) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'DesignsYaml') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'thumbnail',
      value: `./${node.slug}/cover.jpg`,
    });
  }
};

// Create Pages
export const createPages: GatsbyNode['createPages'] = async (gatsbyNode) => {
  await createBlogPostPages(gatsbyNode);
  await createPostsPages(gatsbyNode);
  await createDesignPages(gatsbyNode);
  await createDesignListPages(gatsbyNode);
};
const idk =
  'https://docs.google.com/document/d/e/2PACX-1vQeU-cHFCX8Ec1YLAPTLh7RltaGOTtGNmEgkCqbQ6RfnD6rC8BrVN_cjntiYsUXgqq4RWlv_N3ic03P/pub'
export const sourceNodes = async (
  { actions, createNodeId, createContentDigest, reporter },
  options
) => {
  const { createNode } = actions

  const data = await Axios.get(idk)
    .then((res) => res.data)
    .catch(reporter.error)

  const $ = Cheerio.load(data)

  const title = $('#title').text()

  const elms = $('p span')

  elms.each(function (elm, i) {
    const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/
    if (regex.test($(this).text())) $(this).remove()
  })
  const content = $('#contents')

  const turndownService = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    strongDelimiter: '__',
  })

  turndownService.remove('style')
  turndownService.remove('script')

  const resume = turndownService.turndown(content.html())

  const nodeMeta = {
    id: createNodeId(`google-docs-resume-${title}`),
    title,
    date: new Date(),
    nodeContent: resume,
    parent: null,
    children: [],
    internal: {
      type: `Resume`,
      mediaType: 'text/markdown',
      content: resume,
      contentDigest: createContentDigest(resume),
    },
  }

  createNode(nodeMeta)

  reporter.success('Resume Node Created')
}
