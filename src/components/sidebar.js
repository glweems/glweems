import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Theme from 'src/Theme';

const StyledSidebar = styled.div`
  height: 30%;
  max-height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Theme.colors.bg};
  z-index: 900;
  /* transform: translate(0, -100%); */
`;

const Transition = styled.div`
  .active {
    transition: 500ms all ease-in-out;
    /* transform: unset; */
  }
  .hidden {
    transition: 500ms all ease-in-out;
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

export default function Sidebar(props) {
  const { open } = props;
  return (
    <Transition>
      <StyledSidebar className={open ? 'sidebar ' : 'sidebar '}>
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
      </StyledSidebar>
    </Transition>
  );
}
Sidebar.propTypes = {
  open: PropTypes.bool,
};
