import React from 'react';
import styled from 'styled-components';
import Container from '../components/Common/Container';
import Navigation from './Navigation';
import { media } from '../theme';

export default function Layout({ children }) {
  return (
    // <React.StrictMode>
    <Container smFlush>
      <LayoutContainer>
        <Navigation className="navigation" />
        <main>
          <React.StrictMode>{children}</React.StrictMode>
        </main>
      </LayoutContainer>
    </Container>
    // </React.StrictMode>
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

  /* main, */
  .navigation {
    padding-top: ${({ theme }) => theme.space[6]};
  }

  `};
`;
