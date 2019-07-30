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
        pathToConfigModule: `src/utils/typography.ts`,
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
        enabled: (() => [`production`, `stage`].indexOf(process.env.NODE_ENV) !== -1)(),
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
        userDir: 'public',
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
      resolve: `gatsby-source-behance-images`,
      options: {
        username: `glweems`,
        apiKey: process.env.BEHANCE_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    `gatsby-remark-component`,
  ],
};
