/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Theme from 'src/Theme';
import Navbar from '@/navbar';
import Sidebar from '@/sidebar';

class Navigation extends Component {
  static propTypes = {
    links: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isToggleOn } = this.state;
    this.setState({
      isToggleOn: !isToggleOn,
    });
    console.log(`Toggle is: ${isToggleOn}`);
  }

  render() {
    const { isToggleOn } = this.state;
    const { links } = this.props;
    return (
      <div>
        <Navbar toggle={this.handleClick} />
        <Sidebar links={links} open={isToggleOn} />
      </div>
    );
  }
}
export default Navigation;
