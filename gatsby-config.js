const path = require(`path`)
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Glweems`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@glweems`,
    sidebarLinks: [
      { name: `About`, to: `/about` },
      { name: `Tutorials`, to: `/tutorials` },
      { name: `Graphic Design`, to: `/designs` },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [`/preview/**`, `/do-not-track/me/too/`],
        // Enables Google Optimize using your container Id
        optimizeId: `YOUR_GOOGLE_OPTIMIZE_TRACKING_ID`,
        // Enables Google Optimize Experiment ID
        experimentId: `YOUR_GOOGLE_EXPERIMENT_ID`,
        // Set Variation ID. 0 for original 1,2,3....
        variationId: `YOUR_GOOGLE_OPTIMIZE_VARIATION_ID`,
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: `example.com`,
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-tags`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/tutorials`,
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src/`),
        '@': path.join(__dirname, `src/components/`),
        pages: path.join(__dirname, `src/pages/`),
        styled: path.join(__dirname, `src/styled/`),
        theme: path.join(__dirname, `src/styled/theme.js`),
        elements: path.join(__dirname, `src/styled/elements.js`),
        state: path.join(__dirname, `src/state`),
        data: path.join(__dirname, `src/data.js`),
        forms: path.join(__dirname, `src/components/forms/`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: `Roboto` },
          { family: `Karla`, variants: [`400`, `400i`, `700`, `700i`] },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography` },
    },
    {
      resolve: `gatsby-source-behance`,
      options: { username: `glweems`, apiKey: process.env.BEHANCE_TOKEN },
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
    `custom-markdown`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-images`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
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
}
