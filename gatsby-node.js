console.clear();
const fs = require('fs');
const download = require('image-downloader');
require('dotenv').config();
const rimraf = require('rimraf');
const axios = require('axios');

const { BEHANCE_TOKEN } = process.env;
const BEHANCE_USER = 'glweems';
const BASE_DIR = './src/images/behance';

const BEHANCE_API = endpoint =>
  `http://behance.net/v2/${endpoint}?api_key=${BEHANCE_TOKEN}`;

const projectsUrl = BEHANCE_API(`projects/`);
const projectUrl = id => BEHANCE_API(`projects/${id}`);
//  console.log(behanceProject(1));

// * Remove / Create Dir
const initDir = async dir => {
  await rimraf(BASE_DIR, () => fs.mkdirSync(dir));
  console.log(`Directory ${dir} created`);
};
initDir(BASE_DIR);

// * Get Projects JSON
const getAllProjects = async () =>
  axios.get(projectsUrl).then(res => res.data.projects);

// getAllProjects();

//  * Get Single Project JSON
function getSingleProject(id) {
  return axios
    .get(projectUrl(id))
    .then(res => res.data.project)
    .then(data => console.log(data));
}
// console.log(getSingleProject(74933741));

const createProjectDirectory = id => fs.mkdirSync(`${BASE_DIR}/${id}`);

const createProjectDirectories = async () => {
  const projects = await getAllProjects();
  projects.map(project => createProjectDirectory(project.id));
};

createProjectDirectories();

// * Download an image
// {url: 'https://someurl.com/img.jpg', dest: './images'}
// const downloadImage = async options =>
//   download
//     .image(options)
//     .then(img => console.log(`${img.filename} downloaded`))
//     .catch(error => console.log(error));

// downloadImage({
//   url: 'https://cdn-images-1.medium.com/max/2400/1*Ym0k0WtVHcSezv7cMZYDWg.gif',
//   dest: './',
// });

// async function getUser() {
//   try {
//     // ! Get Projects
//     const response = await axios.get(ProjectsUrl('users/glweems/projects'));
//     const { projects } = response.data;

//     projects.map(async (project, index) => {
//       try {
//         mkdirSync(`src/images/behance/${project.id}`)
//           .then(console.log(`${project.name} dir created successfully`))
//           .then(
//             downloadIMG({
//               url: project.covers.original,
//               dest: `./src/images/behance/${project.id}/cover.jpg`,
//             })
//               .then(console.log(`Downloaded ${index}/${projects.length}`))

//               .then(async () => {
//                 const res = await axios.get(ProjectUrl(project.id));
//                 console.log(res);
//               })
//               .catch(error => console.log(error))
//           );
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUser();

// // const options = ;
