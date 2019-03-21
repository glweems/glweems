// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-md-template-js": () => import("/Users/gw/repos/glweems/src/templates/MDTemplate.js" /* webpackChunkName: "component---src-templates-md-template-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/gw/repos/glweems/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/gw/repos/glweems/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-design-js": () => import("/Users/gw/repos/glweems/src/pages/design.js" /* webpackChunkName: "component---src-pages-design-js" */),
  "component---src-pages-index-js": () => import("/Users/gw/repos/glweems/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/gw/repos/glweems/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-tutorials-js": () => import("/Users/gw/repos/glweems/src/pages/tutorials.js" /* webpackChunkName: "component---src-pages-tutorials-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/gw/repos/glweems/.cache/data.json")

