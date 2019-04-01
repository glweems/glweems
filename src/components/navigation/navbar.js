import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import theme from 'src/styled/theme'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background: transparent;
  color: ${theme.colors.bg};
  font-family: ${theme.font};
  font-weight: 600;
`

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.5rem;
  :first-child {
    margin-left: 1rem;
  }
  :last-child {
    margin-right: 1rem;
  }
`

const Navbar = styled.div`
  align-items: center;
  background: ${theme.colors.light};
  font-family: ${theme.font};
  font-size: 1rem;
  z-index: 1000;
  padding: 0.25 0.5rem;
`

const Brand = styled.div`
  color: ${theme.colors.dark};
  font-weight: 900;
  text-decoration: none;
  text-transform: uppercase;
`

const NavItem = styled.span`
  color: ${theme.colors.dark};
  font-family: ${theme.font};
  font-size: 1.25rem;
  font-weight: bolder;
  margin-bottom: 0.25rem;
  padding-right: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  :current {
    color: ${theme.colors.red};
  }
  :hover {
    color: ${theme.colors.red};
    text-decoration: underline;
  }
`

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  width: 98%;
  z-index: 900;
`

class Dropdown extends Component {
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

    return open ? <StyledDropdown>{NavLinks}</StyledDropdown> : <></>
  }
}

const Navigation = props => (
  <Navbar>
    <FlexContainer>
      <Brand className="brand">
        <Link to="/">glw</Link>
      </Brand>
      <Button onClick={props.toggle}>menu</Button>
    </FlexContainer>
    <Dropdown links={props.links} open={props.open} />
  </Navbar>
)
Navigation.propTypes = {
  toggle: PropTypes.func,
  open: PropTypes.bool,
  links: PropTypes.array,
}
export default Navigation
