// gatsby-config.js
const { generateConfig } = require('gatsby-plugin-ts-config');
const path = require('path');

module.exports = generateConfig({ configDir: '.gatsby', projectRoot: __dirname });
