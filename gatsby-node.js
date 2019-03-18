/* eslint-disable no-unused-vars */
console.clear();
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const axios = require('axios');

const { BEHANCE_TOKEN } = process.env;
const BEHANCE_USERNAME = 'glweems';
const USER_ID = 234567890;
const BASE_DIR = './src/images/behance';

const behance = axios.create({
  baseURL: 'https://api.behance.net/v2/',
  timeout: 1000,
  params: { api_key: BEHANCE_TOKEN },
  download() {
    console.log('download');
  }
});

rimraf(BASE_DIR, () => fs.mkdirSync(BASE_DIR));

const downloadImage = (url, dir, filename, callback) => {
  axios({
    method: 'get',
    url,
    responseType: 'stream'
  })
    .then(response =>
      response.data.pipe(fs.createWriteStream(`${dir}/${filename}`))
    )
    .catch(err => console.log(err));
};

// PF
// download(
//   project.covers.original,
//   projectDir,
//   `/${project.slug}.jpg`,
//   () => console.log('done')
// );
//   behance
//     .get(`projects/${project.id}`)
//     .then(res => res.data.project)
//     .then(modules =>
//       modules.map(module => {
//         console.log(module.id);
//       })
//     );
// })
// )
// console.log(`Folder: ${project.slug} Created.`);
// fs.mkdirSync(projectDir);
// behance.get('/users/glweems').then(res => console.log(res));
behance.get(`/users/glweems/projects`).then(res => {
  const {
    data: { projects }
  } = res;
  projects.map(project => {
    behance
      .get(`projects/${project.id}`)
      .then(async res => {
        const {
          data: {
            project: { slug, modules }
          }
        } = res;
        const projectDir = `${BASE_DIR}/${slug}`;
        fs.mkdirSync(projectDir);
        return res.data.project;
      })
      .catch(error => console.log(error));
  });
});
// .then(projects => projects.map(project => console.log(project.id)))
// .catch(err => console.error(err));

// download('http://bit.ly/2mTM3nY', './', 'hi.jpg', () => console.log('done'));
// axios({ meurl: 'http://bit.ly/2mTM3nY', responseType: 'stream' }).then(response =>
//   response.data.pipe(fs.createWriteStrea('ada_lovelace.jpg'))
// );
// axios({
//   url: 'http://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
// const BEHANCE_API = endpoint =>
//   `http://behance.net/v2/${endpoint}&api_key=${BEHANCE_TOKEN}`;

// const userUrl = BEHANCE_API(`users/${BEHANCE_USERNAME}`);
// const getUserID = () => axios.get(userUrl).then(res => res.data.user.id);
// const getUserInfo = () => axios.get(userUrl).then(res => res.data);

// const userProjectsUrl = id =>
//   BEHANCE_API(`users/${BEHANCE_USERNAME}/projects?id=${id}`);

// const getUserProjects = () =>
//   axios.get(userProjectsUrl(getUserID())).then(res => res.data);

// const getSingleProject = id =>
//   axios
//     .get(`http://behance.net/v2/projects/${id}?api_key=${BEHANCE_TOKEN}`)
//     .then(res => res.data.project)
//     .catch(error => console.log(error));

// // const program = async () => {
// //   console.log(await getUserProjects());
// // };

// // program();

// // * Remove / Create Dir

// const makeProjectDirectory = id => fs.mkdirSync(`${BASE_DIR}/${id}`);

// // const createProjectDirectories = async () => {
// //   const projects = await getUserProjects();
// //   // console.log(await getUserProjects());
// //   // projects.map(project => console.log(project));
// //   // await Promise.all(
// //   //   projects.map(async project => {

// //   //   })
// //   // );
// //   // console.log(projects);
// //   // projects.map((project, index) => makeProjectDirectory(project.id));
// // };
// // https://api.behance.net/v2/users/glweems/projects
// // ?api_key=T6FV1NZy5WqTYRiLbdjY1TEvwV7GwtAq
// // &id=26564925
// // axios
// //   .get(`https://api.behance.net/v2/users/glweems/projects/`, {
// //     params: {
// //       api_key: BEHANCE_TOKEN,
// //     },
// //   })
// //   .then(res => console.log(res.data))
// //   .catch(err => console.log(err.response));

// // createProjectDirectories();

// // * Download an image
// // {url: 'https://someurl.com/img.jpg', dest: './images'}
// // const downloadImage = async options =>
// //   download
// //     .image(options)
// //     .then(img => console.log(`${img.filename} downloaded`))
// //     .catch(error => console.log(error));

// // downloadImage({
// //   url: 'https://cdn-images-1.medium.com/max/2400/1*Ym0k0WtVHcSezv7cMZYDWg.gif',
// //   dest: './',
// // });

// // async function getUser() {
// //   try {
// //     // ! Get Projects
// //     const response = await axios.get(ProjectsUrl('users/glweems/projects'));
// //     const { projects } = response.data;

// //     projects.map(async (project, index) => {
// //       try {
// //         mkdirSync(`src/images/behance/${project.id}`)
// //           .then(console.log(`${project.name} dir created successfully`))
// //           .then(
// //             downloadIMG({
// //               url: project.covers.original,
// //               dest: `./src/images/behance/${project.id}/cover.jpg`,
// //             })
// //               .then(console.log(`Downloaded ${index}/${projects.length}`))

// //               .then(async () => {
// //                 const res = await axios.get(ProjectUrl(project.id));
// //                 console.log(res);
// //               })
// //               .catch(error => console.log(error))
// //           );
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     });
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // getUser();

// // // const options = ;
