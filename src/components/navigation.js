import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Theme from "../Theme";

const Button = styled.button`
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 1000;
  color: ${Theme.colors.bg};
  border: none;
  vertical-align: middle;
  ::before {
    content: "MENU";
  }
  background: ${Theme.colors.dark};
`;

const Sidebar = styled.div`
  height: 100%;
  max-height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Theme.colors.bg};
  z-index: 900;
`;

const SidebarTransition = styled.div`
  transition: 1s all ease-in-out;
  * {
    transition: 1s all ease-in-out;
  }
`;

const NavLinks = styled.nav`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.span`
  font-size: 3rem;
  font-weight: bolder;
  * {
    color: ${Theme.colors.dark};
    :hover {
      color: ${Theme.colors.red};
      text-decoration: underline;
    }
  }
  text-transform: uppercase;
  text-decoration: none;
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log(`Toggle is: ${this.state.isToggleOn}`);
  }

  render() {
    const ToggleButton = () => <Button onClick={this.handleClick} />;
    const IsSideBarOpen = () =>
      this.state.isToggleOn ? (
        <Sidebar>
          <NavLinks>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio/">designs</Link>
            </NavItem>
            <NavItem>
              <Link to="/">contact</Link>
            </NavItem>
          </NavLinks>
        </Sidebar>
      ) : (
        ""
      );
    return (
      <>
        <ToggleButton />
        <SidebarTransition>
          <IsSideBarOpen />
        </SidebarTransition>
      </>
    );
  }
}
export default Navigation;
