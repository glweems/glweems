import { Container, Flex, List, Button } from 'elements'
import { toggleDarkMode, toggleNavBar } from 'state/reducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FullLogo } from '@/icons'
import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  faBars,
  faTimesCircle,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons'
import { media } from 'theme'
import { lighten, darken } from 'polished'

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  .close {
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-out;
  }
  .open {
    visibility: visable;
    opacity: 1;
    transition: all 0.2s ease-in;
  }

  a:hover {
    color: ${props => props.theme.blue};
  }

  ${List} {
    background: ${props => darken(0.1, props.theme.bg)};
    padding: 1rem;
    font-size: 1.75rem;
  }
`

const Navbar = styled.section`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.text};
  border-bottom: 2px solid ${props => lighten(0.05, props.theme.bg)};
  padding: 0.5rem 0.25rem;
  top: 0;
  .toggle {
    display: none;
    /* background: ${props => props.theme.bg}; */
    color: ${props => props.theme.text};
    :hover {
    color: ${props => props.theme.blue};
    }
  }

  .links {
    *:not(last-child) {
      padding: 0.5rem ;
    }
  }
  ${Flex} {
    align-content: center;
  }
  ${media.phone`
.links {
  display: none;
}

.toggle {
  display: unset;
}


`};
  svg {
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
    display: block;
    fill: ${props => props.theme.text};
    :hover {
       fill: ${props => props.theme.blue};
    }
  }

  .logo-link {
    padding-left: 0.5rem;
  }
`

const Navigation = ({ isDarkMode, isNavOpen, navbarLinks, dispatch }) => (
  <Wrapper>
    <Navbar>
      <Container>
        <Flex w100 h100 alignCenter between>
          <Link className='logo-link' to='/'>
            <FullLogo />
          </Link>
          <Button
            className='toggle'
            type='button'
            onClick={() => dispatch(toggleNavBar(!isNavOpen))}>
            <FontAwesomeIcon icon={!isNavOpen ? faBars : faTimesCircle} />
          </Button>
          <div className='links'>
            {navbarLinks.map(link => (
              <Link key={link.name} to={link.to}>
                {link.name}
              </Link>
            ))}
          </div>
        </Flex>
      </Container>
    </Navbar>
    <Container>
      <List simple className={isNavOpen ? `open` : `close`}>
        {navbarLinks.map(link => (
          <li key={link.name}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
        <li>
          <Button
            bordered
            type='button'
            onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>
            <FontAwesomeIcon icon={faAdjust} />
          </Button>
        </li>
      </List>
    </Container>
  </Wrapper>
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
