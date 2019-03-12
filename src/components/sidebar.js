import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Theme from 'src/Theme';

const StyledSidebar = styled.div`
  height: 100vh;
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

const Transition = styled.div`
  .active {
    transition: 250ms all ease-in-out;
  }
  .hidden {
    transition: 250ms transform ease-in-out;
    transform: translate(0, -100%);
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
      <StyledSidebar className={open ? 'sidebar active' : 'sidebar hidden'}>
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
