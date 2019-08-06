require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Garrett Weems',
    titleTemplate: '%s · Glweems',
    description: 'Full stack web developer / graphic designer.',
    url: 'https://glweems.com',
    image: './src/images/favicon.jpg',
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
    `@rhysforyou/gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography.ts`,
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
        component: require.resolve(`./src/components/Providers.tsx`),
      },
    },
    `gatsby-transformer-sharp`,
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
        repos: [
          {
            name: `dotenv`,
            remote: `git@github.com:glweems/dotenv.git`,
            patterns: [`*`],
          },
          {
            name: `react-peekaboo-navbar`,
            remote: `git@github.com:gwtuts/react-peekaboo-navbar.git`,
            patterns: [`*`],
          },
          {
            name: `react-navbar-scroller`,
            remote: `git@github.com:gwtuts/react-navbar-scroller.git`,
            patterns: [`*`],
          },
          {
            name: `gatsby-darkmode`,
            remote: `git@github.com:gwtuts/gatsby-darkmode.git`,
            patterns: [`*`],
          },
          {
            name: `styled-container`,
            remote: `git@github.com:gwtuts/styled-container.git`,
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
              maxWidth: 800,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: `Ayu Mirage Bordered`,
              extensions: [
                {
                  identifier: `teabyii.ayu`,
                  version: `0.18.0`,
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
