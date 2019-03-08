import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Theme, { HamburgerButton } from "../Theme";

const Navbar = styled.div`
  width: 100%;
  background: ${Theme.colors.red};
  // * Flex
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // * Position
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

const StyledButton = styled.button`
  background: transparent;
  color: transparent;
  border: none;
  margin: 0;
  margin-right: 1rem;
  padding: 0;
`;

const NavItem = styled.span`
  font-display: ${Theme.headingFont};
  font-weight: bold;
  font-size: 3rem;
  &:hover {
    color: ${Theme.colors.red};
  }
`;

const Nav = styled.nav`
  text-align: right;
  *:not(:last-child) {
    font-display: ${Theme.headingFont};
    margin-right: 1rem;
  }
`;

const Brand = styled.span`
  padding: 1rem 0;
  margin-left: 1rem;
  font-weight: bold;
  font-style: italic;
`;

const Sidebar = styled.nav`
  height: 100vh;
  // * Flex
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  font-family: ${Theme.headingFont};
  padding-right: 1rem;
  transition: all 1s ease-in-out;
`;

class Navigation extends Component {
  // ! Constructor
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  // ! Toggle
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log(`Toggle is: ${this.state.isToggleOn}`);
  }
  // ! Render
  render() {
    const ToggleButton = () => (
      <StyledButton onClick={this.handleClick}>
        <HamburgerButton />
      </StyledButton>
    );
    return this.state.isToggleOn ? (
      <Navbar>
        <Brand>glweems</Brand>
        <ToggleButton />
      </Navbar>
    ) : (
      <>
        <Navbar>
          <Brand>glweems</Brand>
          <ToggleButton />
        </Navbar>
        <Sidebar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/portfolio">Home</Link>
          </NavItem>
          <NavItem>Contact</NavItem>
        </Sidebar>
      </>
    );
  }
}

export default Navigation;
