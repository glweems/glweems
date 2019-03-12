// import * as Sentry from '@sentry/browser';
// import packageJson from './package.json';

console.log('packageJson.version');
// Sentry.init({});

// const RELEASE = '0.1.0';

// if (process.env.NODE_ENV === 'production') {
//   Sentry.init({
//     dsn: 'https://0c4da3a90ae54fb286dc83cd6daff483@sentry.io/1408965',
//     release: RELEASE,
//   });
// }
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Designer / Developerr',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@glweems',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        // HTTP headers
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    // ! SENTRY
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://0c4da3a90ae54fb286dc83cd6daff483@sentry.io/1408965',
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
