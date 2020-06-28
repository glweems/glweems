import styled, { css } from 'styled-components';
import { FlexProperty } from 'csstype';
import { media, containerWidths, gridGap, text, bg as background } from '../../theme';

const { sm, md, lg, xl } = containerWidths;
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

const Container = styled.div<ContainerProps>`
  ${containerCss};
  gap: ${(props: ContainerProps) => (props.gap ? gridGap(props.gap) : 0)};
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
  ${({ bg }) =>
    bg &&
    css`
      background: ${background};
    `}
    ${({ inverted }) =>
      inverted &&
      css`
        color: ${background};
        background: ${text};
      `}
`;

Container.displayName = 'Container';
export default Container;
