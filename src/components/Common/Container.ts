import styled, { css } from 'styled-components';
import { media } from '../../utils/theme';

export const Container = styled.div`
  ${({ theme: { container } }) =>
    container &&
    css`
      display: grid;
      grid-template-columns:
        [full-start] 1fr
        [fluid-start] minmax(1em, 1fr)
        [main-start] minmax(0, ${container.sm}) [main-end]
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

      ${media.greaterThan(`sm`)`
      grid-template-columns:
        [full-start] 1fr
        [fluid-start] minmax(1em, 1fr)
        [main-start] minmax(0, ${container.md}) [main-end]
        minmax(1em, 1fr) [fluid-end]
        1fr [full-end];
    `}
      ${media.greaterThan(`md`)`
        grid-template-columns:
          [full-start] 1fr
          [fluid-start] minmax(1em, 1fr)
          [main-start] minmax(0, ${container.lg}) [main-end]
          minmax(1em, 1fr) [fluid-end]
          1fr [full-end];
      `}
    `}
`;
