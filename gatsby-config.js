/* eslint-disable prettier/prettier */
const path = require('path');
require('dotenv').config();
// const Sentry = require('@sentry/browser');
// const packageJson = require('./package.json');

// Sentry.init({});
// if (process.env.NODE_ENV === 'production') {
//   Sentry.init({
//     dsn: process.env.SENTRY_TOKEN,
//     release: packageJson.version,
//   });
// }

module.exports = {
  siteMetadata: {
    title: 'Developer',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@glweems'
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
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`
        },
        // Additional options to pass to node-fetch
        fetchOptions: {}
      }
    },
    {
      resolve: `gatsby-source-behance`,
      options: {
        // Visit your profile and grab the name after behance.net/<< username >>
        username: 'glweems',
        // You can get your API Key here: https://www.behance.net/dev/register
        apiKey: process.env.BEHANCE_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        // The node type that has the images you want to grab.
        // This is generally the camelcased verion of the word
        // after the 'all' in GraphQL ie. allMyImages type is myImages
        nodeType: 'myNodes',
        // String that is path to the image you want to use, relative to the node.
        // This uses lodash .get, see docs for accepted formats [here](https://lodash.com/docs/4.17.11#get).
        imagePath: 'path.to.image',
        // ** ALL OPTIONAL BELOW HERE: **
        // Name you want to give new image field on the node.
        // Defaults to 'localImage'.
        name: 'theNewImageField',
        // Adds htaccess authentication to the download request if passed in.
        // Sets the file extension. Useful for APIs that separate the image file path
        // from its extension. Or for changing the extention.  Defaults to existing
        // file extension.
        ext: '.jpg'
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src/'),
        '@': path.join(__dirname, 'src/components/'),
        pages: path.join(__dirname, 'src/pages/'),
        scss: path.join(__dirname, 'src/scss/')
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src/'),
        '@': path.join(__dirname, 'src/components/'),
        pages: path.join(__dirname, 'src/pages/'),
        scss: path.join(__dirname, 'src/scss/')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
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
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    }
  ]
};
