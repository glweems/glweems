import React from 'react';
import styled from 'styled-components';
import Container from '../components//Common/Container';

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <div className="grid-container">{children}</div>
    </LayoutContainer>
  );
}

const LayoutContainer = styled(Container)`
  .grid-container {
    display: grid;

    grid-template-areas: 'left content right';
    grid-template-columns: minmax(0, auto) 1fr minmax(0, auto);
    gap: ${({ theme }) => theme.space[2]};
    margin: 0 auto;

    > * {
      grid-column: 1/-1;
    }
    header {
      grid-row: 1/2;
    }
    .content,
    main {
      grid-area: content;
      padding: ${({ theme }) => theme.space[6]} 0;
    }

    .left {
      position: sticky;
      top: 0;
      grid-area: left;
      max-height: 100vh;
    }
  }
`;
