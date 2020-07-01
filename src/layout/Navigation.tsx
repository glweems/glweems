import React from 'react';
import config from '../../.gatsby/config';
import Link from '../components/Common/Link';
import { containerCss } from '../components/Common/Container';
import styled from 'styled-components';
import { GhostSVG } from '../components/Icons';
import { media } from '../theme';
import ToggleThemeSwitch from '../components/ToggleThemeSwitch';

export type NavigationProps = {
  className?: string;
};

export default function Navigation({ className }: NavigationProps) {
  return (
    <Header className={className}>
      <div className={`${className}__inner`}>
        <div>
          <Link
            to="/"
            css={`
              padding: ${({ theme }) => theme.space[2]};
            `}
          >
            <GhostSVG size={35} />
          </Link>
        </div>
        <nav>
          {config.links.map((link) => (
            <Link key={link.name} to={link.path} className="button">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="toggle-switch-container">
          <ToggleThemeSwitch />
        </div>
      </div>
    </Header>
  );
}

Navigation.defaultProps = { className: 'navigation' };

const Header = styled.header<NavigationProps>`
  ${containerCss};

  nav {
    display: flex;
  }

  ${media.greaterThan('sm')`
    nav {
      flex-direction: column;
    }
  `};

  .toggle-switch-container {
    justify-self: flex-end;
  }

  .${({ className }) => className}__inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${({ theme }) => theme.space[2]};
    justify-content: space-between;
    ${media.greaterThan('sm')`
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content 1fr;
      /* flex-direction: column; */
    `};

    .toggle-switch-container {
      justify-self: flex-start;
    }
  }
`;
