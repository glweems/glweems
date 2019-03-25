---
path: "/tutorials/styled-container"
git:  "https://github.com/gwtuts/styled-container.git"
date: "2019-03-19"
title: "Responsive Container Component with React and Styled-Components."
subtitle: "In this project we will create a responsive bootstrap-like component that we can reuse across that site with reactjs and styled-components."
thumbnail: null
---

# Responsive Container Component with React and Styled-Components

## Setup

In this project we will create a responsive bootstrap-like component that we can reuse across that site with reactjs and styled-components.

First things first you're going to need to install the _styled-components_ node package.

`npm install --save styled-components`

The way I like to structure my files for something like this is to create a **Theme.js** file in my **src/** directory.

<!--Open up your `Theme.js` file and start by importing the 'styled-components' dependency.


```javascript
// Theme.js
import styled from 'styled-components';
```
-->

Now we are able to start creating our **Theme** object.
This will act like sass / scss / less variables and we will be able use them across all of our components.

```javascript
// Theme.js
```

Now that these value are set in an object we will be able to export the object and use it across our components.

```javascript
// Theme.js
// Theme.js
export const Theme = {
  colors: {
    dark: `#24292e`,
    light: `#EEEEEE`,
    primary: `#ff5851`
  },
  fontFamily: {
    header: 'Source Sans Pro',
    body: 'Roboto'
  },
  padding: '1rem 0.5rem'
};

export const Breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 639,
  laptop: 1140,
  laptopL: 1440,
  desktop: 2560
};

export default { Theme, breakpoints };
```

Now lets create a new file in our **src/** directory named **Styled.js**

> The actual structure for this kind of thing is entirely up to you this is just what I has been working for me.

I find it easier / less cluttered if I have a **src/Theme.js** with all my variables and things I might need to quickly change across the site in this file and the `src/Styled.js`

In your `Styled.js` file import the `styled-components` dependency, and our `Theme` / `Breakpoints` objects

```javascript
// Styled.js
import styled from 'styled-components';
import { Theme, Breakpoints } from './Theme';

const Container = styled.div`
  padding: ${Theme.padding};
`;
```

So now we created a styled-component that has it's padding set from our **Theme** Object.
That's cool and all but it's not really that useful. Lets make this thing responsive.

```javascript
// Styled.js
export const MQ = {};
for (const key in ScreenSizes) {
  if (key)
    MQ[key] = styles =>
      `@media screen and (min-width: ${ScreenSizes[key]}px) { ${styles} }`;
}
```
