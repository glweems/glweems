---
path: /tutorials/react-peekaboo-navbar
date: 2019-03-18
title: 'Simple navbar component using react, typescript, and styled-components.'
subtitle: 'This will create a react-component `Navbar` that will be hidden when the user scrolls down and visible when the user scrolls up.'
thumbnail: tbn.png
tags:
  - react
  - navbar
  - component
  - styled-components
---

# React auto-hide on scroll navbar.

![demo](demo.gif)


<p align="center">
  <a href="https://react-peekaboo-navbar.gwtuts.com">Demo</a>
  ·
  <a href="https://github.com/gwtuts/react-peekaboo-navbar">GitHub Repo</a>
</p>

---

This will create a react-component Navbar that will be hidden when the user scrolls down and visible when the user scrolls up.

#### Dependencies

- styled-components

```
npm install styled-components --save
```

In your App.js create the following constants;

```js
// App.js
import Navbar from './Navbar'

const navlinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

const brand = { name: 'peekaboo', to: 'home' }

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar brand={brand} links={navlinks} />
      </div>
    )
  }
}
```

In your `src/` folder create a `Navbar.js` file

```js
export default class Navbar extends Component {
  static propTypes = {...}

  constructor(props) {...}

  componentDidMount() {...}

  componentWillUnmount() {...}

  handleScroll() {...}

  render() {

    return (
      <div>
      ...
      </div>
    );
  }
}
```

Let’s start with mapping our props to be as elements to be rendered on the page.

```js
// Navbar.js
render() {
  const { brand, links } = this.props;

  const NavLinks = () =>
    links.map((link, index) => (
      <a key={index} href={link.to}>
        {link.name}
      </a>
    ));

  return (
    <div>
        <a className="brand" href={brand}> {brand} </a>
        <nav>
          <NavLinks />
        </nav>
      </div>
  );
}
```

Now let’s go ahead and add some validation to our props with `PropTypes`.

```javascript
import PropTypes from 'prop-types'
//...

export default class Navbar extends Component {
  static propTypes = {
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      })
    ),
  }
}
```

For our constructor we need to add

```js
constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
```

We need to set the event listener after the component mounts.

```js
componentDidMount() {
  window.addEventListener("scroll", this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.handleScroll);
}
```

Now that we have a function attached to the scroll event we can set the function that will fire.

```js
handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }
```

Now our `show` property in the state object will show **true** if we’re scrolling up and **false** if we’re scrolling up.

We can use a Conditional Operator on our div’s class name to toggle between `"active"` and `"hidden"`

```js
render() {
  return <div className={this.state.show ? "active" : "hidden"} />;
}
```

Toggle between those two classes won’t do anything until we define them in our css. For that we are going to create a _styled-component_
Replace the `div` element with our new styled-component.

```js
import styled from "styled-components";

render() {
...
return (
    <StyledNavbar className={this.state.show ? "active" : "hidden"}>
    ...
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: cornflowerblue;
  z-index: 1000;
  a {
    margin-right: 1rem;
    font-weight: normal;
  }
  .brand {
    font-style: italic;
    margin-left: 1rem;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }`;
```

Now we’re going to create a `Transition` component that will wrap our `StyledNavbar`component.

```js
render() {
    return (
      <Transition>
        <StyledNavbar className={this.state.show ? "active" : "hidden"}>
		...
		</StyledNavbar>
      </Transition>
    );
  }

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;
```

There you have it!

---

### Final Product

<iframe src="https://codesandbox.io/embed/github/gwtuts/react-peekaboo-navbar/tree/master/?autoresize=1&fontsize=14&view=preview&hidenavigation=1" title="react-peekaboo-navbar" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


[![Edit react-peekaboo-navbar](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gwtuts/react-peekaboo-navbar/tree/master/?autoresize=1&fontsize=14&view=preview)
