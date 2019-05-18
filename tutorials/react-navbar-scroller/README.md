---
date: 2019-03-19
title: Simple navbar using react, typescript, and styled-components.
thumbnail: tbn.png
tags:
  - react
  - typescript
  - styles-components
  - navbar
---

# Simple navbar component using react, typescript, and styled-components.

In this project we will create a simple little Navbar component that has a logo or brand name and features horizontal scrolling.

![demo](tbn.png)

<p align="center">
  <a href="https://react-navbar-scroller.now.sh/">Demo</a>
  ·
  <a href="https://github.com/gwtuts/react-navbar-scroller">GitHub Repo</a>
</p>

---

### Setup.

The setup for a react app in `TypeScript` is almost the exact same if you’re already using ``create-react-app```cli for your react applications.

```
npx create-react-app NavbarScrollerDemo --typescript
```

If you don’t already have the create-react-app cli run this script first

```
npm install -g create-react-app
```

#### Optional

Before you get up and running I would recommend you installing the TSLint prettier plugin to keep things nice and tidy.

```
npm install --save-dev tslint-config-prettier
```

Then create a `tslint.json` file in your root directory and add the following.

```js
// tslint.json
{
  "extends": [
    "tslint:latest",
    "tslint-config-prettier"
  ]
}
```

### Getting Started

After you run the `create-react-app NavbarScrollerDemo --typescript` you should end up with a folder structure like so.

```
NavbarScrollerDemo/
├─ .gitignore
├─ node_modules/
├─ public/
├─ src/
 | — — index.tsx
 | — — registerServiceWorker.ts
 | — — logo.svg
 | — — App.tsx
 | — — App.test.tsx
 | — — App.css
 | — — index.css
 | — — assets/
├─ package.json
├─ tsconfig.json
├─ tsconfig.test.json
└─ tslint.json
```

Open your `App.tsx` file and delete all the junk so it looks like this

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div className="App" />;
  }
}

export default App;
```

Now we’re going to install another dependency to reset our browsers css.

`npm install reset-css --save`

Now add the package to your `App.tsx`

```js
// App.tsx
import React, { Component } from 'react';
import 'reset-css';
```

_if you get an error saying module cannot be found you may need to add the package postcss-import_ `npm install postcss-import --save`

With that out of the way lets start creating the component.

Create a new `components/` directory in `./src/components/` and create a new `NavbarScroller.tsx` file.

```js
// ./src/components/NavbarScroller.tsx

import * as React from 'react';

const NavbarScroller = () => {
  return <div />;
};

export default NavbarScroller;
```

Import the component in your `App.tsx`

```js
// App.tsx

import NavbarScroller from './components/NavbarScroller';

// ...

return (
  <div className="App">
    <NavbarScroller />
  </div>
);
```

Now create a `navigation` object in your `App.tsx`. This will be the data we use that gets sent to the component and rendered.

```js
// App.tsx
const navigation = {
  brand: { name: 'NavbarScroller', to: '/' },
  links: [
    { name: 'About Me', to: '/about' },
    { name: 'Blog', to: '/blog' },
    { name: 'Developement', to: '/dev' },
    { name: 'Graphic Design', to: '/design' },
    { name: 'Contact', to: '/contact' }
  ]
};
```

Now pass the object into our component as props.

```js
// App.tsx
export default class App extends Component {
  // the 'public' is a typescript feature.
  public render() {

	// Descructured object for cleaner code :-)
    const { brand, links } = navigation;

    return (
      <div className="App">
        <NavbarScroller brand={brand} links={links} />
      </div>
    );
  }
}
```

From here unfortunately you will get an error. But that’s just typescript doing it thing.

 <div style="position: relative; display: inline-flex; flex-direction: column; height: 100%; width: 1024px; max-width: 100%; overflow-x: hidden; overflow-y: auto; padding: 0.5rem; box-sizing: border-box; text-align: left; font-family: Consolas, Menlo, monospace; font-size: 11px; white-space: pre-wrap; word-break: break-word; line-height: 1.5; color: rgb(41, 50, 56);"><div style="font-size: 2em; font-family: sans-serif; color: rgb(206, 17, 38); white-space: pre-wrap; margin: 0px 2rem 0.75rem 0px; flex: 0 0 auto; max-height: 50%; overflow: auto;">Failed to compile</div><div><pre style="position: relative; display: block; padding: 0.5em; margin-top: 0.5em; margin-bottom: 0.5em; overflow-x: auto; white-space: pre-wrap; border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem; background-color: rgba(206, 17, 38, 0.0470588);"><code style="font-family: Consolas, Menlo, monospace;"><span data-ansi-line="true"><span>/Users/gw/gwtuts/gw-components/src/App.tsx</span></span><br><span data-ansi-line="true"><span></span><span style="color: #881280;"></span><span style="color: #881280;">TypeScript error: </span><span style="color: #881280;"></span><span>Type '{ brand: { name: string; to: string; }; links: { name: string; to: string; }[]; }' is not assignable to type 'IntrinsicAttributes'.</span></span><br><span data-ansi-line="true"><span>  Property 'brand' does not exist on type 'IntrinsicAttributes'.  </span><span style="color: #881280;"></span><span style="color: #881280;">TS2322</span><span style="color: #881280;"></span><span></span></span><br><span data-ansi-line="true"><span></span></span><br><span data-ansi-line="true"><span>  </span><span> </span><span style="color: #333333;"> 25 | </span><span>    </span><span style="color: #c80000;">return</span><span> (</span><span></span></span><br><span data-ansi-line="true"><span>  </span><span> </span><span style="color: #333333;"> 26 | </span><span>      </span><span style="color: #881280;">&lt;</span><span></span><span style="color: #881280;">div</span><span> className</span><span style="color: #881280;">=</span><span></span><span style="color: #1155cc;">"App"</span><span></span><span style="color: #881280;">&gt;</span><span></span><span></span></span><br><span data-ansi-line="true"><span>  </span><span></span><span style="color: #881280;"></span><span style="color: #881280;">&gt;</span><span style="color: #881280;"></span><span></span><span style="color: #333333;"> 27 | </span><span>        </span><span style="color: #881280;">&lt;</span><span></span><span style="color: #881280;">NavbarScroller</span><span> brand</span><span style="color: #881280;">=</span><span>{brand} links</span><span style="color: #881280;">=</span><span>{links} </span><span style="color: #881280;">/</span><span></span><span style="color: #881280;">&gt;</span><span></span><span></span></span><br><span data-ansi-line="true"><span>  </span><span> </span><span style="color: #333333;">    | </span><span>         </span><span style="color: #881280;"></span><span style="color: #881280;">^</span><span style="color: #881280;"></span><span></span><span></span></span><br><span data-ansi-line="true"><span>  </span><span> </span><span style="color: #333333;"> 28 | </span><span>      </span><span style="color: #881280;">&lt;</span><span></span><span style="color: #881280;">/</span><span></span><span style="color: #881280;">div</span><span></span><span style="color: #881280;">&gt;</span><span></span><span></span></span><br><span data-ansi-line="true"><span>  </span><span> </span><span style="color: #333333;"> 29 | </span><span>    )</span><span style="color: #881280;">;</span><span></span><span></span></span><br><span data-ansi-line="true"><span>  </span><span> </span><span style="color: #333333;"> 30 | </span><span>  }</span><span></span></span></code></pre></div><div style="font-family: sans-serif; color: rgb(135, 142, 145); margin-top: 0.5rem; flex: 0 0 auto;">This error occurred during the build time and cannot be dismissed.<br></div></div>

We can fix this by defining the types of props we’re sending to the component.
Get it … types… typescript

If we wanted to, we could simple clear the error by setting out props to any.

```js
// NavbarScroller.tsx

const NavbarScroller = (props: any) => {
  // this completely defeats the purpose of using typescipt
  return (
    <div>
      <p>NavbarScroller</p>
    </div>
  );
};

export default NavbarScroller;
```

I’m not saying that you might not ever need to use `any` to defend you type of for our situation we know we’re going to be sending two different props.

1. The `brand` object that contains two different properties `name, to` these are both strings and even if their value changes. The variable type should still always be an `object` with two values that are `name` and `to`.
2. The `links` array is same object as our `brand` but in an array. And it should always retain that structure.

First let’s just tell TypeScript that the props are an object.

```js
const NavbarScroller = (props: {}) => {...}
```

Now that we have defended the object lets add the `brand`

```js
const NavbarScroller = (props: { brand }) => {...}
```

Now we need to defend the brand and the brand is…. you guessed it, an object.

```js
const NavbarScroller = (props: { brand: {} }) => {...}
```

Now we can start defining the brand object that contains two strings, `name` and `to`

```js
const NavbarScroller = (props: { brand: { name: string, to: string } }) => {...}
```

So that validates our brand object but now we need to validate our links, the array of the same object.

```js
const NavbarScroller = (props: {
  brand: { name: string; to: string };
  links: Array // Start by assigning the array
}) => { ... };
```

Now we can shape the objects within the array.

```
const NavbarScroller = (props: {
  brand: { name: string; to: string };
  links:  Array<{ name: string; to: string }>
}) => { ... };

// Then is pretty much the same as defining the object.
```

That right there is what all the `TypeScript` Hype is about. When functions know what that are expecting before hand it allows us to find bugs before they even happen and make it a lot easier to find and fix problems before they make it into production.

Now lets add our Brand element

```js
// NavbarScroller.tsx
const { brand } = props;
// descructure object to avoid 'props.brand.to'

return (
  <div>
    <a href={brand.to}>{brand.name}</a>
  </div>
);
```

Mapping our links.
Here we want out type to be `NavLinks: any` because we’re returning JSX.

```js
const NavLinks: any = () =>
  links.map((link: { name: string, to: string }) => (
    <li key={link.name}>
      <a href={link.to}>{link.name}</a>
    </li>
  ));

return (
  <div>
    <a href={brand.to}>{brand.name}</a>
    <NavLinks />
  </div>
);
```

Finally.

Lets add some `styled-components` in our `NavbarScroller.tsx`;

```
npm install styled-components --save
```

```js
import * as React from 'react';
import styled from 'styled-components';

const NavbarScroller = (props: {
  brand: { name: string, to: string },
  links: Array<{ name: string, to: string }>
}) => {
  const { brand, links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string, to: string }) => (
      <li key={link.name}>
        <a href={link.to}>{link.name}</a>
      </li>
    ));
  return (
    <div>
      <a href={brand.to}>{brand.name}</a>
      <NavLinks />
    </div>
  );
};

export default NavbarScroller;
```

### Here is the styling I used for the styled-components

```js
const Theme = {
  colors: {
    bg: `#fff`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`
  },
  fonts: {
    body: `IBM Plex Sans, sans-serif`,
    heading: `IBM Plex Sans, sans-serif`
  }
};

const Navbar = styled.nav`
  background: ${Theme.colors.dark};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Brand = styled.a`
  font-weight: bold;
  font-style: italic;
  margin-left: 1rem;
  padding-right: 1rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Li = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  display: flex;
  font-size: 14px;
  height: 50px;
  justify-content: center;
  line-height: 16px;
  margin: 0 10px;
  text-decoration: none;
  white-space: nowrap;
`;
```

After you create the styled-components you can go back and update your component to use them like so.

```js
const NavbarScroller = (props: {
  brand: { name: string, to: string },
  links: Array<{ name: string, to: string }>
}) => {
  const { brand, links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string, to: string }) => (
      <Li key={link.name}>
        <a href={link.to}>{link.name}</a>
      </Li>
    ));
  return (
    <Navbar>
      <Brand href={brand.to}>{brand.name}</Brand>
      <Ul>
        <NavLinks />
      </Ul>
    </Navbar>
  );
};
```

There you have it!

--glweems

![](https://raw.githubusercontent.com/gwtuts/react-navbar-scroller/master/demo.png)
