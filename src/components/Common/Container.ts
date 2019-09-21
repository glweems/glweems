import styled from 'styled-components';
import * as config from '../../theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1em
    [fluid-start] minmax(0, 1fr)
    [main-start] minmax(0, ${config.containerWidths.sm}) [main-end]
    minmax(0, 1fr) [fluid-end]
    1em [full-end];
  width: 100%;
  > * {
    grid-column: main;
  }
  .fluid {
    grid-column: fluid;
  }
  .full {
    grid-column: full;
  }
  ${config.media.greaterThan('md')`
    grid-template-columns:
    [full-start] 1em
    [fluid-start] minmax(0, 1fr)
    [main-start] minmax(0, ${config.containerWidths.md}) [main-end]
    minmax(0, 1fr) [fluid-end]
    1em [full-end]; !important;
    `}

  ${config.media.greaterThan('lg')`
    grid-template-columns:
      [full-start] 1em
      [fluid-start] minmax(0, 1fr)
      [main-start] minmax(0, ${config.containerWidths.lg}) [main-end]
      minmax(0, 1fr) [fluid-end]
      1em [full-end];
    `}
  ${config.media.greaterThan('xl')`
    grid-template-columns:
      [full-start] 1em
      [fluid-start] minmax(0, 1fr)
      [main-start] minmax(0, ${config.containerWidths.xl}) [main-end]
      minmax(0, 1fr) [fluid-end]
      1em [full-end];
    `}

  ${config.media.lessThan('sm')`


    }`}
`;
