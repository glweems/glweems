require('dotenv').config();

const config = {
  defaultTitle: 'Glweems',
  logo: 'https://glweems.com/favicon/logo-48.png',
  author: 'Garrett Weems (glweems)',
  url: 'https://glweems.com',
  legalName: 'Garrett Weems',
  defaultDescription: 'I am a Graphic Designer / Full Stack Web Developer.',
  socialLinks: {
    github: 'https://github.com/glweeems',
    linkedin: 'https://www.linkedin.com/in/glweems',
    instagram: 'https://instagram.com/glweems',
    behance: 'https://www.behance.net/glweems',
    codepen: 'https://codepen.io/glweems',
    medium: 'https://medium.com/@glweems',
  },
  googleAnalyticsID: 'UA-140456624-1',
  themeColor: '#f8d58c',
  backgroundColor: '#f8d58c',
  siteRss: '/rss.xml',
  contact: {
    email: 'gwgraphicdeesign@gmail.com',
  },
};

module.exports = {
  siteMetadata: {
    title: `Garrett Weems`,
    titleTemplate: `%s · Glweems`,
    description: `Full stack web developer / graphic designer.`,
    url: `https://glweems.com`,
    image: `./src/images/favicon.jpg`,
    languageCode: `en`,
    countryCode: `US`,
    siteUrl: config.url,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-yaml`,
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
      resolve: `gatsby-source-behance-images`,
      options: {
        username: `glweems`,
        apiKey: process.env.BEHANCE_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/RootElementWrapper.tsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Optional: Remove the paragraph tag wrapping images
          `gatsby-remark-unwrap-images`,
          // Wrap images by pictures
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: 'bash', js: 'javascript' },
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/assets/favicon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
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
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
