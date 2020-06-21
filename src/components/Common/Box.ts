import styled, { css } from 'styled-components';
import { FlexboxProps, layout, LayoutProps, position, PositionProps, space, SpaceProps, flexbox } from 'styled-system';
import { containerCss } from './Container';

export type BoxProps = SpaceProps & LayoutProps & PositionProps & FlexboxProps & { container?: boolean };

const Box = styled.div<BoxProps>`
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
export default Box;
