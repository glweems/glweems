import React, { Component } from 'react';
import NavbarScroller from './components/NavbarScroller'
// import NavbarScrollerData from './ExampleData'

import 'reset-css'

const navigation = {
  brand: { name: "NavbarScroller", to: "/" },
  links: [
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Developement", to: "/dev" },
    { name: "Graphic Design", to: "/design" },
    { name: "Contact", to: "/contact" },
  ]
}

export default class App extends Component {
  public render() {
    return (
      <div className="App">
        {/* <NavbarScroller brand={NavbarScrollerData.brand} links={NavbarScrollerData.links} /> */}
        <NavbarScroller {...navigation} />
      </div>
    );
  }
}

