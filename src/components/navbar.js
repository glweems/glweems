import { Container, Flex, LI, List } from 'elements'
import { FullLogo, SvgClose, SvgOpen } from '@/icons'
import { toggleDarkMode, toggleNavBar } from 'state/reducers'

import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Navbar = styled.section`
  background: ${props => props.theme.text};
  color: ${props => props.theme.bg};
  /* height: 4em; */
  button {
    margin: 0;
    padding: 0;
  }
  vertical-align: middle;
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

  .open {
    display: none;
  }

  .toggle {
    background: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    padding: 0 2em;
  }
`
const Navigation = ({ isDarkMode, isNavOpen, navbarLinks, dispatch }) => (
  <Navbar>
    <Container>
      <Flex w100 h100 alignCenter between>
        <Link to='/'>
          <FullLogo />
        </Link>
        <button
          type='button'
          onClick={() => dispatch(toggleNavBar(!isNavOpen))}>
          {isNavOpen ? <SvgOpen /> : <SvgClose />}
        </button>
      </Flex>
      <List simple textRight className={!isNavOpen ? `open` : `close`}>
        {navbarLinks.map(link => (
          <LI key={link.name}>
            <Link to={link.to}>{link.name}</Link>
          </LI>
        ))}
        <LI>
          <button
            type='button'
            className='toggle'
            onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
            dark mode is {isDarkMode ? `on` : `off`}
          </button>
        </LI>
      </List>
    </Container>
  </Navbar>
)

Navigation.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  navbarLinks: PropTypes.array.isRequired,
}

export default connect(state => ({
  isNavOpen: state.isNavOpen,
  isDarkMode: state.isDarkMode,
}))(Navigation)
