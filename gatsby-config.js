const path = require('path');
require('dotenv').config();
const Sentry = require('@sentry/browser');
const packageJson = require('./package.json');

Sentry.init({});
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_TOKEN,
    release: packageJson.version,
  });
}

module.exports = {
  siteMetadata: {
    title: 'Developer',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@glweems',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        // Url to query from
        url: 'https://api.github.com/graphql',
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src/'),
        '@': path.join(__dirname, 'src/components/'),
        pages: path.join(__dirname, 'src/pages/'),
        scss: path.join(__dirname, 'src/scss/'),
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src/'),
        '@': path.join(__dirname, 'src/components/'),
        pages: path.join(__dirname, 'src/pages/'),
        scss: path.join(__dirname, 'src/scss/'),
      },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'glweems-portfolio-site',
        short_name: 'glweems',
        start_url: '/',
        background_color: '#bada55',
        theme_color: '#bada55',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
