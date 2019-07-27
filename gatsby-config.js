/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
require('dotenv').config();

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Garrett Weems',
    titleTemplate: '%s · Glweems',
    description: 'Full stack web developer / graphic designer.',
    url: 'https://glweems.com',
    image: '/images/snape.jpg',
    languageCode: 'en',
    countryCode: 'US',
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Garrett Weems | Web Developer`,
        short_name: `glweems`,
        start_url: `/`,
        background_color: `#ff5851`,
        theme_color: `#5687e8`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: `glweems.com`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/favicon.png`,
        appName: null,
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: `auto`,
        lang: `en-US`,
        background: `#ff5851`,
        theme_color: `#5687e8`,
        display: `standalone`,
        orientation: `any`,
        start_url: `/?homescreen=1`,
        version: `1.0`,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Karla'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `./src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: process.env.SENTRY_TOKEN,
        environment: process.env.NODE_ENV,
        enabled: (() =>
          [`production`, `stage`].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` },
      },
    },
    {
      resolve: `gatsby-source-git-remotes`,
      options: {
        repos: [
          {
            name: `react-peekaboo-navbar`,
            remote: `https://github.com/gwtuts/react-peekaboo-navbar.git`,
            patterns: [`*`],
          },
          {
            name: `react-navbar-scroller`,
            remote: `https://github.com/gwtuts/react-navbar-scroller.git`,
            patterns: [`*`],
          },
          {
            name: `gatsby-darkmode`,
            remote: `https://github.com/gwtuts/gatsby-darkmode.git`,
            patterns: [`*`],
          },
          {
            name: `styled-container`,
            remote: `https://github.com/gwtuts/styled-container.git`,
            patterns: [`*`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `repos`,
        path: path.join(__dirname, '.cache', 'gatsby-source-git'),
      },
    },
    {
      resolve: `gatsby-source-behance-images`,
      options: {
        username: `glweems`,
        apiKey: process.env.BEHANCE_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `behanceImages`,
        path: path.join(__dirname, '.cache', 'gatsby-source-behance-images'),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-component`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
};
