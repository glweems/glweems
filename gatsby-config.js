/* eslint-disable prettier/prettier */
require('dotenv').config();
const path = require('path');

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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'glweems-portfolio-site',
        short_name: 'glweems',
        start_url: '/',
        background_color: '#bada55',
        theme_color: '#bada55',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'image',
        path: `./src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`
        },
      }
    },
    {
      resolve: `gatsby-source-behance`,
      options: {
        username: 'glweems',
        apiKey: process.env.BEHANCE_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'BehanceProjects',
        imagePath: 'node.covers.size_808',
      },
    },
  ]
};
