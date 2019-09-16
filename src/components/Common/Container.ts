import styled from 'styled-components';
import * as config from '../../style';

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [fluid-start] minmax(1em, 1fr)
    [main-start] minmax(0, ${config.containerWidths.sm}) [main-end]
    minmax(1em, 1fr) [fluid-end]
    1fr [full-end];
  width: 100%;

  > {
    * {
      grid-column: main;
    }
    .fluid {
      grid-column: fluid;
    }
    .full {
      grid-column: full;
    }
  }

  ${config.media.greaterThan('sm')`
    grid-template-columns:
      [full-start] 1fr
      [fluid-start] minmax(1em, 1fr)
      [main-start] minmax(0, ${config.containerWidths.md}) [main-end]
      minmax(1em, 1fr) [fluid-end]
      1fr [full-end];
    `}

  ${config.media.greaterThan('md')`
      grid-template-columns:
        [full-start] 1fr
        [fluid-start] minmax(1em, 1fr)
        [main-start] minmax(0, ${config.containerWidths.lg}) [main-end]
        minmax(1em, 1fr) [fluid-end]
        1fr [full-end];
    `}
`;
