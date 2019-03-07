import React, { Component } from "react";
import styled from "styled-components";

const Theme = {
  HeadingFont: `"IBM Plex Sans", sans-serif;`
};

const StyledButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  text-align: center;
  vertical-align: middle;
  transform: translx ate3d(-100vw, 0, 0);
  z-index: 1000;
`;

const Stripe = styled.div`
  opacity: 0.95;
  background: #ff5851;
  height: 100vh;
  width: 30vw;
  position: fixed;
  top: 0px;
  right: 0px;
`;

const StyledSidebar = styled.div`
  background: #bada55;
  height: 100vh;
  width: 80vw;
  position: fixed;
  top: 0px;
  left: 0px;
  margin: auto 0;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-content: center;
  ul {
    list-style-type: none;
    height: 50%;
    width: 80%;
    background: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      padding: 1rem;
    }
    a {
      font-size: 2.4rem;
      font-family: ${Theme.HeadingFont};
      font-weight: 900;
      line-height: 0.3;
      color: black;
      .msk {
        display: flex;
        flex-direction: column;
        margin-left: 0;
        min-height: 100%;
        /* padding: 0 40px; */
        z-index: 10;
        display: inline-block;
        span {
          opacity: 0.9;
          position: relative;
          display: block;
          width: 100%;
          max-height: 9px;
          :hover {
            background: #ff5851;
          }
        }
      }
    }
  }
`;

const Sidebar = () => (
  <StyledSidebar>
    <ul>
      <li>
        <a href="/">
          <span class="msk">
            <span>Home</span>
          </span>
        </a>
      </li>
      <li>
        <a href="/">
          <span class="msk">
            <span>Home</span>
          </span>
        </a>
      </li>
      <li>
        <a href="/">
          <span class="msk">
            <span>Home</span>
          </span>
        </a>
      </li>
    </ul>
  </StyledSidebar>
);

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log(`Toggle is: ${this.state.isToggleOn}`);
  }

  render() {
    const ToggleButton = () => (
      <StyledButton onClick={this.handleClick}>Click</StyledButton>
    );

    return !this.state.isToggleOn ? (
      <ToggleButton />
    ) : (
      <React.Fragment>
        <ToggleButton />
        <Sidebar />
        <Stripe />
      </React.Fragment>
    );
  }
}

export default Navigation;
