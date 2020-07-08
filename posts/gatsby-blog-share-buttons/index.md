---
id: 8
path: /gatsby-blog-share-buttons
thumbnail: gatsby-blog-social-share-buttons.png
date: 2019-10-07T01:00:01.889Z
edited:
next: /
title: Gatsby Blog Social Share Buttons
subtitle: Add social media share buttons to each of you're blog posts in Gatsby.js
tags:
  - gatsby
  - blog
  - social
  - share
popular: false
---

> Here's what the end result will look like

![End Result](social-icons.png)

## Let's Get Started

### Installing Dependencies

First off we'll need to npm package `react-share`

```bash
yarn add react-share
```

or

```bash
npm install --save react-share
```

### Project Structure

Create a new file in your `src/components/` directory called `ShareButtons.js`

### Creating the component

```js
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';

export const ShareButtons = ({ twitterHandle, url, title, tags }) => (
  <div>
    <FacebookShareButton url={url}>
      <FacebookIcon />
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
    >
      <TwitterIcon />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon />
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon />
    </WhatsappShareButton>
  </div>
);

export default ShareButtons;
```

### Adding the component to our blog template

> This will depend on how exactly you're doing you gatsby blog

#### Creating the graphql query

Add the following to your `gatsby-config.js` file.

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // ....
    siteUrl: `https://glweems.com`,
  },
  // ....
};
```

now we can query for the domain through graphql

Add this to your query your are currently using to create your pages

```graphql
query {
  # ....
  site {
    siteMetadata {
      domain: siteUrl
    }
  }
}
```
