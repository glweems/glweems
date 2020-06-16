import { ITSConfigFn, IMergePluginOptions } from 'gatsby-plugin-ts-config'
import packageJson from './package.json'
import dotenv from 'dotenv'
dotenv.config()

const config = {
  defaultTitle: 'Glweems',
  logo: 'https://glweems.com/favicon/logo-48.png',
  author: packageJson.author,
  url: packageJson.homepage,
  legalName: 'Garrett Weems',
  defaultDescription: 'I am a Graphic Designer / Full Stack Web Developer.',
  socialLinks: {
    github: 'https://github.com/glweeems',
    linkedin: 'https://www.linkedin.com/in/glweems',
    instagram: 'https://instagram.com/glweems',
    behance: 'https://www.behance.net/glweems',
    codepen: 'https://codepen.io/glweems',
    medium: 'https://medium.com/@glweems'
  },
  googleAnalyticsID: 'UA-140456624-1',
  themeColor: '#f8d58c',
  backgroundColor: '#f8d58c',
  siteRss: '/rss.xml',
  disqusShortName: 'https-glweems-com',
  contact: {
    email: 'gwgraphicdeesign@gmail.com',
    twitter: 'garrettlweems'
  }
}

const siteMetadata = {
  title: `Garrett Weems`,
  titleTemplate: `%s · Glweems`,
  description: `Full stack web developer / graphic designer.`,
  image: `./src/images/favicon.jpg`,
  languageCode: `en`,
  countryCode: `US`,
  siteUrl: config.url,
  twitterHandle: config.contact.twitter,
  disqusShortName: config.disqusShortName
}

const gatsbyConfig: ITSConfigFn<'config', IMergePluginOptions> = ({ projectRoot }) => {
  return {
    siteMetadata,
    plugins: [
      'gatsby-plugin-typescript',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-netlify',
      'gatsby-plugin-generate-types',
      // 'gatsby-plugin-use-dark-mode',
      // 'use-dark-mode',
      {
        resolve: 'gatsby-plugin-prefetch-google-fonts',
        options: {
          fonts: [
            {
              family: 'Montserrat',
              variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
            }
          ]
        }
      },
      'gatsby-transformer-yaml',
      {
        resolve: 'gatsby-source-graphql',
        options: {
          typeName: 'GitHub',
          fieldName: 'github',
          url: 'https://api.github.com/graphql',
          headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` }
        }
      },
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: `${projectRoot}/src/utils/typography.ts`
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${projectRoot}/content`,
          name: 'content'
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${projectRoot}/posts`,
          name: `posts`
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${projectRoot}/designs`,
          name: 'designs'
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${projectRoot}/src/assets/`
        }
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-transformer-remark',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            // Optional: Remove the paragraph tag wrapping images
            'gatsby-remark-unwrap-images',
            'gatsby-remark-responsive-iframe',
            // Wrap images by pictures
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 720
                // linkImagesToOriginal: true
              }
            },
            {
              resolve: 'gatsby-remark-prismjs',
              options: {
                aliases: { sh: 'bash', js: 'javascript' }
              }
            },
            'gatsby-remark-copy-linked-files',
            'gatsby-remark-autolink-headers',
            'gatsby-remark-smartypants'
          ]
        }
      },
      {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: config.googleAnalyticsID,
          head: true
        }
      },
      {
        resolve: 'gatsby-plugin-favicon',
        options: {
          logo: `${projectRoot}/src/assets/favicon.png`,
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
            windows: false
          }
        }
      },
      {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /assets/
          }
        }
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'Garrett Weems | Web Developer',
          short_name: packageJson.name,
          start_url: '/',
          background_color: config.backgroundColor,
          theme_color: config.themeColor,
          display: 'minimal-ui',
          icon: `${projectRoot}/src/assets/favicon.png`
        }
      },
      'gatsby-plugin-robots-txt',
      'gatsby-plugin-offline'
    ]
  }
}

export default gatsbyConfig
