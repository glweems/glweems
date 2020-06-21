import styled from 'styled-components';
import * as config from '../../theme';

const Sticky = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;

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
`;

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
`;

export const Links = styled.div`
  a:not(:last-child) {
    margin-right: 1em;
  }
`;
