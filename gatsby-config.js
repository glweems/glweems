const path = require('path')
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: 'Glweems',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@glweems',
    sidebarLinks: [
      { name: 'About', to: '/about' },
      { name: 'Tutorials', to: '/tutorials' },
      { name: 'Graphic Design', to: '/designs' },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-tags`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Garrett Weems | Web Developer',
        short_name: 'glweems',
        start_url: '/',
        background_color: '#ff5851',
        theme_color: '#5687e8',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'image',
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/tutorials`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src/'),
        '@': path.join(__dirname, 'src/components/'),
        pages: path.join(__dirname, 'src/pages/'),
        styled: path.join(__dirname, 'src/styled/'),
        elements: path.join(__dirname, 'src/styled/elements'),
        store: path.join(__dirname, 'src/store/')
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Karla`, variants: [`400`, `400i`, `700`, `700i`] }],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-behance',
      options: { username: 'glweems', apiKey: process.env.BEHANCE_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_TOKEN,
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-picture`,
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
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
