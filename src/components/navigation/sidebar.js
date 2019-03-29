import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Theme from 'src/Theme'

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Theme.colors.bg};
  z-index: 900;
`

const Transition = styled.div`
  .active {
    transition: 250ms all ease-in-out;
    /* transform: translate(0, -110%); */
  }
  .hidden {
    transition: 250ms transform ease-in-out;
    transform: translate(0, -200%);
    /* visibility: hidden; */
  }
`

const Nav = styled.nav`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

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
`

export default class extends Component {
  static propTypes = {
    open: PropTypes.bool,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        to: PropTypes.string,
      })
    ),
  }

  render() {
    const { open, links } = this.props

    const NavLinks = links.map(({ name, to }) => (
      <NavItem key={name}>
        <Link to={to}>{name}</Link>
      </NavItem>
    ))
    return (
      <Transition>
        <StyledSidebar className={open ? 'sidebar active' : 'sidebar hidden'}>
          <Nav>{NavLinks}</Nav>
        </StyledSidebar>
      </Transition>
    )
  }
}
