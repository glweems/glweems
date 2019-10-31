import styled from 'styled-components'
import { animated } from 'react-spring'
import * as config from '../../theme'

export const Sticky = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`

export const NavbarStyles = styled.div`
  width: 100%;
  background: ${config.rootBg};
  > * {
    grid-column: main;
  }
  button {
    ${config.media.lessThan('md')`
      display: none;
    `}
  }
`

export const Navigation = styled(Sticky)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1em max-content 1fr max-content 1em;
  align-content: center;
  align-items: center;
  justify-content: stretch;
  justify-items: flex-start;

  width: 100%;
  height: ${config.navbarHeight};
  background: ${config.bg};
  ::before,
  ::after {
    content: '';
  }

  .logo {
    margin-right: ${config.rhythm(1)};
    font-weight: bolder;
    text-transform: uppercase;
    cursor: pointer;
  }
`

export const Links = styled.div`
  a:not(:last-child) {
    margin-right: 1em;
  }
`

export const BurgerStyles = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  & span {
    position: relative;
    display: block;
    width: 2.5rem;
    height: 0.1875rem;
    margin-bottom: 0.5rem;
    padding-top: 0.06em;
    background: ${config.text};
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    top: -11px;
    transform: rotate(45deg);
  }

  .open span:nth-child(1) {
    top: 11px;
    transform: rotate(-45deg);
  }
  ${config.media.greaterThan('md')`
      display: none;
  `}
`

export const NavLinks = styled(animated.ul)`
  justify-self: end;
  margin: auto 0;
  list-style-type: none;

  .nav-item {
    margin-right: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 300ms linear 0s;

    ${config.media.lessThan('md')`
      display: none;
    `}
  }

  .nav-item:last-child {
    padding: 1em;
  }
`

export const DropdownWrapper = styled(animated.div)`
  margin: 1em;
  padding: 1em;
  background: ${config.text};
  ${config.media.greaterThan('md')`
      display: none;
    `}
  button {
    float: right;
  }
  border-radius: ${config.borderRadius};
`
