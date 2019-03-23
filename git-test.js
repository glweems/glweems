const fetch = require('node-fetch');

// const fs = require('fs');
// const { readdirSync, statSync } = require('fs');
// const { join } = require('path');

// const myPath = 'tutorials/';
// const simpleGit = require('simple-git')(myPath);

// simpleGit.clone('https://github.com/gwtuts/react-navbar-scroller.git', [], () =>
//   console.log('done')
// );

// const dirs = p =>
//   readdirSync(p).filter(f => statSync(join(p, f)).isDirectory());

// const tutorials = dirs(myPath);

// const copyREADME = () =>
//   tutorials.forEach((tutorial, index) => {
//     fs.createReadStream('README.md').pipe(
//       fs.createWriteStream(`${myPath}/${index}.md`)
//     );
//   });

// copyREADME();
// console.log(tutorials);
fetch(
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@glweems'
)
  .then(res => res.json())
  .then(data => console.log(data));
