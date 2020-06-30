import styled, { css } from 'styled-components';
import { FlexProperty } from 'csstype';
import { media, breakpoints } from '../../theme';

const { sm, md, lg } = breakpoints;
export interface ContainerProps {
  gap?: 1 | 2 | 3;
  smFlush?: boolean;
  bg?: boolean;
  inverted?: boolean;
  justifyContent?: FlexProperty<'show'>;
}

export const containerCss = css`
  display: grid;
  grid-template-columns:
    [flush-start] 1em
    [fluid-start] minmax(0, 1fr)
    [main-start] minmax(0, ${sm}) [main-end]
    minmax(0, 1fr) [fluid-end]
    1em [flush-end];

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
    `};

  ${media.greaterThan('lg')`
    grid-template-columns:
      [flush-start] 1em
      [fluid-start] minmax(0, 1fr)
      [main-start] minmax(0, ${lg}) [main-end]
      minmax(0, 1fr) [fluid-end]
      1em [flush-end];
    `};
`;

const Container = styled.div<ContainerProps>`
  ${containerCss};
  gap: ${(props) => (props.gap ? props.theme.space[props.gap] : 0)};
  justify-content: ${(props) => props.justifyContent};
  ${({ smFlush }) =>
    smFlush &&
    css`
      ${media.lessThan('sm')`
        > * {
          grid-column: flush;
        }
      `};
    `}
`;

Container.displayName = 'Container';
export default Container;
