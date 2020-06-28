import styled, { css } from 'styled-components';
import {
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  color,
  ColorProps,
  SpaceProps,
  flexbox
} from 'styled-system';
import { containerCss } from './Container';

export type BoxProps = SpaceProps & LayoutProps & PositionProps & FlexboxProps & ColorProps & { container?: boolean };

const Box = styled.div<BoxProps>`
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
  ${(props) =>
    props.container &&
    css`
      ${containerCss}
    `};
`;

Box.displayName = 'Box';

export default Box;
