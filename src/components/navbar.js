import { Container, Flex, List } from 'elements'
import { FullLogo } from '@/icons'
import { toggleDarkMode, toggleNavBar } from 'state/reducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimesCircle,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons'
import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Navbar = styled.section`
  background: ${props => props.theme.blue};
  color: ${props => props.theme.light};
  position: fixed;
  width: 100%;
  z-index: 1000;
  border-bottom: 2px solid ${props => props.theme.text};
  padding: 0.5rem 0;
  top: 0;
  svg {
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
    display: block;
    fill: ${props => props.theme.bg};
  }
  a:hover {
    color: ${props => props.theme.text};
  }
  ul {
    margin: 1rem 0;
  }
  li {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  .open {
    display: none;
  }

  .toggle {
    background: ${props => props.theme.bg};
    color: ${props => props.theme.text};
  }
`
const Navigation = ({ isDarkMode, isNavOpen, navbarLinks, dispatch }) => (
  <Navbar>
    <Container>
      <Flex w100 h100 alignCenter between>
        <Link to='/'>
          <FullLogo />
        </Link>
        <FontAwesomeIcon
          onClick={() => dispatch(toggleNavBar(!isNavOpen))}
          icon={!isNavOpen ? faBars : faTimesCircle}
        />
      </Flex>
      <List simple textRight className={!isNavOpen ? `open` : `close`}>
        {navbarLinks.map(link => (
          <li key={link.name}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
        <li>
          <div style={{ display: `inline-block` }}>
            <FontAwesomeIcon
              onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
              icon={faAdjust}
            />
          </div>
        </li>
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
