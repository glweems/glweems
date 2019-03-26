/* eslint-disable react/destructuring-assignment */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container } from 'src/Styled'
import Theme from 'src/Theme'
import styled from 'styled-components'

const Button = styled.button`
  color: ${Theme.colors.bg};
  border: none;
  vertical-align: middle;
  ::before {
    content: 'MENU';
  }
  background: ${Theme.colors.dark};
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
`

const Navbar = styled.div`
  z-index: 1000;
  align-items: center;
  font-family: ${Theme.fontFamily.header};
  font-size: 1.25rem;
  background: ${Theme.colors.light};
`

const Brand = styled.div`
  * {
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    font-style: italic;
    text-decoration: none;
  }
`

const NavItem = styled.a`
  width: 100%;
  font-size: 1.25rem;
  font-weight: bolder;
  color: ${Theme.colors.dark};
  margin-bottom: 0.25rem;
  :hover {
    color: ${Theme.colors.red};
    text-decoration: underline;
  }
  :current {
    color: ${Theme.colors.red};
  }
  text-transform: uppercase;
  text-decoration: none;
`

const StyledDropdown = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
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

export default props => (
  <Navbar>
    <Container>
      <FlexContainer>
        <Brand className="brand">
          <Link to="/">glweems.com</Link>
        </Brand>
        <Button onClick={props.toggle} />
      </FlexContainer>
      <Dropdown links={props.links} open={props.open} />
    </Container>
  </Navbar>
)
