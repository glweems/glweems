import { Button, Container, Flex, LI, List } from 'elements'
import { toggleDarkMode, toggleNavBar } from 'state/reducers'

import FullLogo from '@/logo'
import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Navbar = styled.section`
  background: ${props => props.theme.text};
  color: ${props => props.theme.bg};
  svg {
    fill: ${props => props.theme.bg};
  }
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  a:hover {
    text-decoration: underline;
  }
  ul {
    margin: 2rem 0;
  }
`
const Navigation = ({ isDarkMode, isNavOpen, navbarLinks, dispatch }) => (
  <Navbar>
    <Container>
      <Flex w100 h100 alignCenter between>
        <Link to='/'>
          <FullLogo />
        </Link>
        <Button
          dark
          bordered
          onClick={() => dispatch(toggleNavBar(!isNavOpen))}>
          menu
        </Button>
      </Flex>
      {isNavOpen ? (
        <List no-bullets text-right>
          {navbarLinks.map(link => (
            <LI key={link.name}>
              <Link to={link.to}>{link.name}</Link>
            </LI>
          ))}
          <LI>
            <button
              type='button'
              className='gw'
              style={isDarkMode ? { background: 'pink' } : null}
              onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
              dark mode is {isDarkMode ? 'on' : 'off'}
            </button>
          </LI>
        </List>
      ) : null}
    </Container>
  </Navbar>
)

Navigation.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({
  isNavOpen: state.isNavOpen,
  isDarkMode: state.isDarkMode,
}))(Navigation)
