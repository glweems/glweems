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
        icon: `src/assets/favicon.png`,
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
        logo: `./src/assets/favicon.png`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `./src/assets`,
      },
    },
    {
      resolve: `gatsby-source-websites`,
      options: {
        websites: [
          {
            name: `prepress`,
            slug: `prepress`,
            description: `A website build for screen printing shop owners to calculate cost of printer shirts for consumers.`,
            url: `https://prepress.now.sh/products`,
            repo: `https://github.com/glweems/prepress`,
          },
          {
            name: `Cheat Day Cheesecakes`,
            slug: `cheatdaycheesecakes`,
            description: `A website built for Denton, TX local food truck company.`,
            url: `https://cheatdaycheesecakes.com`,
            repo: `https://github.com/glweems/cheat-day-cheesecake`,
          },
          {
            name: `Coin Market`,
            slug: `coin-market`,
            description: `Coinmarketcap like web app using Cryptocompare's API and React.js`,
            url: `https://coin-market.now.sh`,
            repo: `https://github.com/glweems/coin-market`,
          },
        ],
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
            remote: `https://github.com/glweems/dotenv.git`,
            patterns: [`*`],
          },
          {
            name: `react-peekaboo-navbar`,
            remote: `https://github.com/glweems/react-peekaboo-navbar.git`,
            patterns: [`*`],
          },
          {
            name: `react-navbar-scroller`,
            remote: `https://github.com/glweems/react-navbar-scroller.git`,
            patterns: [`*`],
          },
          {
            name: `gatsby-darkmode`,
            remote: `https://github.com/glweems/gatsby-darkmode.git`,
            patterns: [`*`],
          },
          {
            name: `styled-container`,
            remote: `https://github.com/glweems/styled-container.git`,
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
          `gatsby-remark-unwrap-images`,
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
              colorTheme: `Dark+ (default dark)`,
            },
          },
        ],
      },
    },
  ],
};
