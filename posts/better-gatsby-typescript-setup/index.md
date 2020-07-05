---
id: 5
path: /better-gatsby-typescript-setup
thumbnail: gatsby-with-typescript.png
date: 2020-07-01T01:00:01.889Z
edited:
next: /react-navbar-scroller
title: A Better Gatsby + Typescript Setup
subtitle: A guide to writing your gatsby config files in typescript and auto-generate interfaces from your graphql queries
tags:
  - gatsby
  - typescript
  - graphql
  - react
  - codegen
popular: false
---

If you’re anything like me you probably love using Gatsby.js for React front end web development and love using Typescript for all of it’s type safe goodness.

Here’s a few tips I recently figured out for a more complete typescript setup

## Write your Gatsby files in Typescript

> I always thought it was annoying writing 99% of my website in Typescript then having to go and write the Gatsby createPages() functions in js

The solution for this is [gatsby-plugin-ts-config](https://www.gatsbyjs.org/packages/gatsby-plugin-ts-config/%20 'gatsby-plugin-ts-config')

This plugin is pure greatness.

To get started run

```bash
npm install --save-dev gatsby-plugin-ts-config
```

Then create a new folder in your root directory called `/gatsby` and move all of these files into the `/gatsby` folder and rename them to `.ts` files

- `gatsby-config.js`
- `gatsby-node.js`
- `gatsby-browser.js`
- `gatsby-ssr.js`

> If you’re not using all four gatsby files that’s fine just move over and rename what you have

Now that our refactoring is done we can create a new `gatsby-config.js` in our root director

> Unfortunately we still have to have one gatsby .js file but this just points our entire config to our .ts files

```js
// gatsby-config.js
const { generateConfig } = require('gatsby-plugin-ts-config');

module.exports = generateConfig({
  configDir: 'gatsby', // or wherever you would like to store your gatsby files
  projectRoot: __dirname,
});
```

Now your project directory should look something like this

```Text
.
├── gatsby
    ├── gatsby-config.ts
    ├── gatsby-node.ts
    ├── gatsby-browser.ts
    └── gatsby-ssr.ts
└── gatsby-config.js
```

With this setup we’re able to write functions like this

```ts
// ./gatsby/gatsby-node.ts

import createBlogPostPages from './pages/create-blog-pages';
import createDesignPages from './pages/create-design-pages';
import createDesignListPages from './pagination/create-design-list-pages';
import createPostsPages from './pagination/create-post-list-pages';

// Create Pages
export const createPages: GatsbyNode['createPages'] = async (gatsbyNode) => {
  await createBlogPostPages(gatsbyNode);
  await createPostsPages(gatsbyNode);
  await createDesignPages(gatsbyNode);
  await createDesignListPages(gatsbyNode);
};
```

```ts
// ./gatsby/pages/create-blog-pages.ts

import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import { CreateBlogPostPagesQuery } from '../../src/types/generated';

export default async function createBlogPostPages({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs) {
  const result = await graphql<CreateBlogPostPagesQuery>(`
    query CreateBlogPostPages {
      posts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogPosts = result?.data?.posts.nodes;

  blogPosts?.forEach(({ frontmatter }, index) => {
    actions.createPage({
      path: `/blog${frontmatter.path}`,
      component: path.resolve(`src/templates/BlogPostTemplate.tsx`),
      context: {
        slug: frontmatter.path,
      },
    });
  });
}
```

This allows us to separate each different type of pages were creating into their own typed functions

## Typescript interfaces for your gatsby graphql queries

### Install dependencies

Run this to install all dependencies

> It’s worth it

```bash
npm install --save-dev @graphql-codegen/introspection @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```

Create a `codegen.yml` file in your root directory and add the following

```yaml
overwrite: true
schema: 'http://localhost:8000/___graphql'
documents:
  [
    './src/**/*.tsx',
    './src/**/*.ts',
    './gatsby/**/*.ts',
    './node_modules/gatsby-transformer-sharp/src/*.js',
    './node_modules/gatsby-image/src/*.js',
  ]
generates:
  src/types/generated.tsx:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
  ./schema.json:
    plugins:
      - 'introspection'
hooks:
  afterOneFileWrite:
    - prettier --write
```

Add these scripts to your `package.json`

```json
// package.json

"scripts": {
  // ....
  "ggl-types": "graphql-codegen --config codegen.yml",
  "ggl-types:watch": "graphql-codegen --config codegen.yml -w"
}
```

> These scripts will fail unless you already have the dev server running
