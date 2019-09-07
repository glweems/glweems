import styled from 'styled-components';
import { animated } from 'react-spring';
import { transparentize, tint } from 'polished';
import { media } from '../../utils/theme';
import { Container } from '../Common';

export const NavbarStyles = styled(animated(Container))`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${props => props.theme.navbarHeight};
  background: ${props => transparentize(0.1, props.theme.colors.bg)};
  > * {
    grid-column: main;
  }
  button {
    ${media.lessThan('md')`
      display: none;
    `}
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  height: ${props => props.theme.navbarHeight};
  .logo {
    cursor: pointer;
  }
`;

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
    background: ${props => props.theme.colors.text};
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
  ${media.greaterThan('md')`
      display: none;
  `}
`;

export const NavLinks = styled(animated.ul)`
  justify-self: end;
  margin: auto 0;
  list-style-type: none;

  .link {
    margin-right: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 300ms linear 0s;

    ${media.lessThan('md')`
      display: none;
    `}
  }

  .link:last-child {
    margin: 0;
  }
`;

export const DropdownWrapper = styled(animated.div)`
  position: fixed;
  top: ${props => props.theme.navbarHeight};
  right: 0;
  left: 0;
  z-index: 2;
  padding: 1em;
  background: ${props => transparentize(0.03, props.theme.colors.text)};
  ${media.greaterThan('md')`
      display: none;
    `}
`;
