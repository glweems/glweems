import dotenv from 'dotenv';
dotenv.config();
import { IMergePluginOptions, ITSConfigFn } from 'gatsby-plugin-ts-config';
import { FileSystemNode } from 'gatsby-source-filesystem';
import packageJson from '../package.json';
import config from './config';
import { linkedHeaderIcon } from '../src/components/Icons';
import { graphql } from 'graphql';

const gatsbyConfig: ITSConfigFn<
  'config',
  IMergePluginOptions<'gatsby-source-filesystem', FileSystemNode>
> = ({ projectRoot }) => {
  const gatsbyConfig = {
    siteMetadata: {
      title: `Garrett Weems`,
      titleTemplate: `%s · Glweems`,
      description: `Full stack web developer / graphic designer.`,
      image: `${projectRoot}/src/assets/ghost.png`,
      languageCode: `en`,
      countryCode: `US`,
      siteUrl: config.url,
      twitterHandle: config.contact.twitter,
      disqusShortName: config.disqusShortName,
    },
    plugins: [
      'gatsby-plugin-typescript',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-netlify',
      'gatsby-plugin-use-dark-mode',
      'use-dark-mode',
      'gatsby-plugin-sitemap',
      'gatsby-transformer-yaml',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${projectRoot}/content`,
          name: 'content',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${projectRoot}/posts`,
          name: `posts`,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${projectRoot}/designs`,
          name: 'designs',
        },
      },
      {
        resolve: 'gatsby-plugin-prefetch-google-fonts',
        options: {
          fonts: [
            {
              family: 'Montserrat',
              variants: ['400', '500', '600', '700', '800'],
            },
          ],
        },
      },
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: `${projectRoot}/src/utils/typography.ts`,
        },
      },

      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${projectRoot}/src/assets/`,
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                backgroundColor: '#fafafa',
                maxWidth: 1035,
              },
            },
            {
              resolve: 'gatsby-remark-responsive-iframe',
              options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
            },
            {
              resolve: 'gatsby-remark-autolink-headers',
              icon: linkedHeaderIcon,
              enableCustomId: true,
            },
            'gatsby-remark-prismjs',
            'gatsby-remark-copy-linked-files',
            'gatsby-remark-smartypants',
            'gatsby-remark-external-links',
          ],
        },
      },
      {
        resolve: 'gatsby-source-github',
        options: {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
          },
          queries: [githubPinnedItems],
        },
      },
      {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: config.googleAnalyticsID,
          head: true,
        },
      },
      {
        resolve: 'gatsby-plugin-favicon',
        options: {
          logo: `${projectRoot}/src/assets/ghost/ghost-blue.png`,
          injectHTML: true,
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            twitter: false,
            yandex: false,
            windows: false,
          },
        },
      },
      {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /assets/,
          },
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'Garrett Weems | Web Developer',
          short_name: packageJson.name,
          start_url: '/',
          background_color: config.backgroundColor,
          theme_color: config.themeColor,
          display: 'minimal-ui',
          icon: `${projectRoot}/src/assets/ghost.png`,
        },
      },
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [require(`postcss-typography`)],
        },
      },
      'gatsby-plugin-robots-txt',
    ],
  };

  return gatsbyConfig;
};

const githubPinnedItems = `
query TopPinnedItems {
    user(login: "glweems") {
      pinnedItems(first: 3) {
        edges {
          node {
            ... on Repository {
              id
              name
              homepageUrl
              url
              createdAt
              description
              openGraphImageUrl
              primaryLanguage {
                color
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default gatsbyConfig;
