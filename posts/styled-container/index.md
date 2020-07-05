---
id: 3
path: /styled-container
thumbnail: tbn.png
date: 2019-03-21T01:00:01.889Z
edited:
next: /gatsby-darkmode
title: Styled Container
subtitle: Responsive Container Component with React and Styled-Components.
tags:
  - react
  - component
  - container
  - responsive
  - styled-components
popular: false
---

### Setup

First things first you're going to need to install the `styled-components` node package.

```bash
npm install --save styled-components
```

or

```bash
yarn add styled-components
```

Now we are able to start creating our Theme object.

This will act like sass / scss / less variables and we will be able use them across all of our components.

> Theme.js

```javascript
export const Theme = {
  colors: {
    dark: `#24292e`,
    light: `#EEEEEE`,
    primary: `#ff5851`,
  },
  fontFamily: {
    header: 'Source Sans Pro',
    body: 'Roboto',
  },
  padding: '1rem 0.5rem',
};
```

```javascript
export const Breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 639,
  laptop: 1140,
  laptopL: 1440,
  desktop: 2560,
};
```

```javascript
export const MQ = {};
for (const key in ScreenSizes) {
  if (key)
    MQ[key] = (styles) =>
      `@media screen and (min-width: ${ScreenSizes[key]}px) { ${styles} }`;
}
export default Theme;
```

> I like to create a `Theme.js` file in my src/ directory to store my Theme obj and Breakpoints object.

## Usage

```javascript
import Theme from 'theme';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: ${Theme.padding};
  ${MQ.laptopL(`max-width: 1140px`)}
  ${MQ.desktop(`max-width: 1440px`)};
`;
```
