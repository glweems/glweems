const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-md-template-js": hot(preferDefault(require("/Users/gw/repos/glweems/src/templates/MDTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/gw/repos/glweems/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/gw/repos/glweems/src/pages/404.js"))),
  "component---src-pages-design-js": hot(preferDefault(require("/Users/gw/repos/glweems/src/pages/design.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/gw/repos/glweems/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/gw/repos/glweems/src/pages/page-2.js"))),
  "component---src-pages-tutorials-js": hot(preferDefault(require("/Users/gw/repos/glweems/src/pages/tutorials.js")))
}

