const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/MDTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};

// /* eslint-disable no-unused-vars */
// console.clear();
// require('dotenv').config();
// const fs = require('fs');
// const Path = require('path');
// const rimraf = require('rimraf');
// const axios = require('axios');

// const { BEHANCE_TOKEN } = process.env;
// const BASE_DIR = './src/images/behance';

// rimraf(BASE_DIR, () => fs.mkdirSync(BASE_DIR));
// const behance = axios.create({
//   baseURL: 'https://api.behance.net/v2/',
//   timeout: 1000,
//   params: { api_key: BEHANCE_TOKEN },
// });

// const downloadImage = async (url, filename) => {
//   const writer = fs.createWriteStream(
//     Path.resolve(__dirname, BASE_DIR, `${filename}.jpg`)
//   );
//   return new Promise((resolve, reject) => {
//     axios({
//       url,
//       method: 'GET',
//       responseType: 'stream',
//       params: { api_key: BEHANCE_TOKEN },
//     })
//       .then(({ data }) => {
//         data.pipe(writer);
//       })
//       .then(() => resolve)
//       .catch(reject);
//   });
// };

// behance
//   .get('users/glweems/projects')
//   .then(({ data: { projects } }) => projects)
//   .then(projects => {
//     projects.forEach(async ({ id, covers }) => {
//       downloadImage(covers.original, id).then(
//         console.log(`Image ${id} downloaded`)
//       );
//     });
//   })
//   .catch(err => console.log(err));

// // behance
// //   .get('users/glweems/projects')
// //   .then(({ data: { projects } }) => projects)
// //   .then(projects => {
// //     projects.forEach(async ({ id, covers }) => {
// //       await fs.mkdirSync(`${BASE_DIR}/${id}`);
// //       console.log(`Folder: ${id} created`);
// //       await downloadImage(covers.original, id, id).then(
// //         console.log(`Image ${id} downloaded`)
// //       );
// //     });
// //   })
// //   .catch(err => console.log(err));
