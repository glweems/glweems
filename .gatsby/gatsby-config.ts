import dotenv from 'dotenv';
import { IMergePluginOptions, ITSConfigFn } from 'gatsby-plugin-ts-config';
import { FileSystemNode } from 'gatsby-source-filesystem';
import packageJson from '../package.json';
import { linkedHeaderIcon } from '../src/components/Icons';
import config, { siteMetadata } from './config';
dotenv.config();

const { GITHUB_TOKEN, SENTRY_TOKEN } = process.env;

const gatsbyConfig: ITSConfigFn<
  'config',
  IMergePluginOptions<'gatsby-source-filesystem', FileSystemNode>
> = ({ projectRoot }) => {
  const gatsbyConfig = {
    siteMetadata,
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
          name: 'images',
          path: `${projectRoot}/src/assets`,
        },
      },
      {
        resolve: 'gatsby-plugin-google-docs-resume',
        options: {
          url: config.googleDocResumeUrl,
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
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${projectRoot}/content`,
          name: 'resume',
        },
      },
      {
        resolve: 'gatsby-plugin-sentry',
        options: {
          dsn: SENTRY_TOKEN,
          environment: process.env.NODE_ENV,
          enabled: (() =>
            ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
        },
      },
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: `${projectRoot}/src/utils/typography.ts`,
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
            Authorization: `Bearer ${GITHUB_TOKEN}`,
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
            options: {
              tag: 'svg',
              name: 'SvgIcon',
              props: {
                className: 'icon',
                fill: 'currentcolor',
                width: '1em',
                height: '1em',
                viewBox: '0 0 16 16',
              },
            },
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
          icon: `${projectRoot}/src/assets/ghost/ghost-blue.png`,
        },
      },
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [require(`postcss-typography`)],
        },
      },
      'gatsby-plugin-robots-txt',
      'gatsby-plugin-remove-trailing-slashes',
      `gatsby-plugin-remove-serviceworker`,
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
