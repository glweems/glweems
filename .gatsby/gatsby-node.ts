import {
  GatsbyNode,
  PluginOptions,
  SetFieldsOnGraphQLNodeTypeArgs,
} from 'gatsby';
import { GraphQLString } from 'graphql';
import createBlogPostPages from './pages/create-blog-pages';
import createDesignPages from './pages/create-design-pages';
import createDesignListPages from './pagination/create-design-list-pages';
import createPostsPages from './pagination/create-post-list-pages';
import { MarkdownRemark, DesignsYaml } from '../src/queries';

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
        resolve: (source: MarkdownRemark) => String(source.frontmatter.id),
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
    };
  }
  // by default return empty object
  return {};
};

// Create Pages
export const createPages: GatsbyNode['createPages'] = async (gatsbyNode) => {
  await createBlogPostPages(gatsbyNode);
  await createPostsPages(gatsbyNode);
  await createDesignPages(gatsbyNode);
  await createDesignListPages(gatsbyNode);
};
