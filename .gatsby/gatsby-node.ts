import { GatsbyNode, PluginOptions, SetFieldsOnGraphQLNodeTypeArgs } from 'gatsby';
import { GraphQLString } from 'graphql';
import createBlogPostPages from './pages/create-blog-pages';
import createDesignPages from './pages/create-design-pages';
import createDesignListPages from './pagination/create-design-list-pages';
import createPostsPages from './pagination/create-post-list-pages';

export const setFieldsOnGraphQLNodeType: GatsbyNode['setFieldsOnGraphQLNodeType'] = async (
  args: SetFieldsOnGraphQLNodeTypeArgs,
  options: PluginOptions
) => {
  if (args.type.name === `MarkdownRemark`) {
    return {
      url: {
        type: GraphQLString,
        resolve: (source: any) => `https://glweems.com${source.frontmatter.path}`
      },
      disqusIdentifier: {
        type: GraphQLString,
        resolve: (source: any) => String(source.frontmatter.id)
      }
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
