import styled, { css } from 'styled-components';
import { media, containerWidths, gridGap } from '../../theme';

const { sm, md, lg, xl } = containerWidths;
interface Props {
  gap?: 1 | 2 | 3;
  smFlush?: boolean;
}

const containerCss = css`
  display: grid;
  grid-template-columns:
    [flush-start] 1em
    [fluid-start] minmax(0, 1fr)
    [main-start] minmax(0, ${sm}) [main-end]
    minmax(0, 1fr) [fluid-end]
    1em [flush-end];
  gap: ${(props: Props) => (props.gap ? gridGap(props.gap) : 0)};
  width: 100%;

  > * {
    grid-column: main;
  }
  .fluid {
    grid-column: fluid;
  }
  .flush {
    grid-column: flush;
  }

  ${media.greaterThan('md')`
    grid-template-columns:
    [flush-start] 1em
    [fluid-start] minmax(0, 1fr)
    [main-start] minmax(0, ${md}) [main-end]
    minmax(0, 1fr) [fluid-end]
    1em [flush-end]; !important;
    `}

  ${media.greaterThan('lg')`
    grid-template-columns:
      [flush-start] 1em
      [fluid-start] minmax(0, 1fr)
      [main-start] minmax(0, ${lg}) [main-end]
      minmax(0, 1fr) [fluid-end]
      1em [flush-end];
    `}

  ${media.greaterThan('xl')`
    grid-template-columns:
      [flush-start] 1em
      [fluid-start] minmax(0, 1fr)
      [main-start] minmax(0, ${xl}) [main-end]
      minmax(0, 1fr) [fluid-end]
      1em [flush-end];
    `}
`;

export const Container = styled.div`
  ${containerCss}
`;
