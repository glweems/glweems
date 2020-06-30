module.exports = {
  addTypename: false,
  excludes: [],
  includes: [
    './.gatsby/**/*/.ts',
    './src/**/*.tsx',
    './src/**/*.ts',
    './plugins/**/*.js',
    './node_modules/gatsby-transformer-sharp/src/*.js',
    './node_modules/gatsby-image/src/*.js',
  ],
  service: {
    name: 'gatsbySchema',
    localSchemaFile: './schema.json',
    endpoint: {
      url: 'http://localhost:8000/___graphql',
      skipSSLValidation: true,
    },
  },

  tagName: 'graphql',
};
