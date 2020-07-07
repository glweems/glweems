import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    PositionProps,
    FlexboxProps,
    ColorProps {}

const Box = styled.div<BoxProps>`
  ${color};
  ${flexbox};
  ${space};
  ${layout};
  ${position};
`;

Box.displayName = 'Box';

export default Box;
