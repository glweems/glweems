import { PageProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Container from '../components/Common/Container';
import Welcome from '../components/Welcome';
import { media } from '../theme';
import Navigation from './Navigation';
export type LayoutProps = PropsWithChildren<Pick<PageProps, 'path'>>;

export default function Layout({ children, path }: LayoutProps) {
  return (
    <React.StrictMode>
      <React.Fragment>
        {path === '/' && <Welcome />}
        <Container>
          <LayoutContainer>
            <Navigation className="navigation" />
            <main>
              <React.StrictMode>{children}</React.StrictMode>
            </main>
          </LayoutContainer>
        </Container>
      </React.Fragment>
    </React.StrictMode>
  );
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 230px 1fr;
  gap: ${({ theme }) => theme.space[2]};
  margin: 0 auto;

  main {
    grid-column: 1/-1;
  }

  .navigation {
    grid-column: 1 / -1;
  }

  ${media.greaterThan('sm')`
  main {
    grid-column: 2 / -1;
  }

  .navigation {
    grid-column: 1 / 2;
    position: sticky;
    top: 0;
    max-height: 100vh;
  }

  .navigation, main {
    padding-top: ${({ theme }) => theme.space[3]};
  }

  `};
`;
