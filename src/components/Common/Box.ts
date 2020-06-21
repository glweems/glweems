import styled, { css } from 'styled-components';
import { space, SpaceProps, layout, LayoutProps, position, PositionProps } from 'styled-system';
import { containerCss } from './Container';

export type BoxProps = SpaceProps & LayoutProps & PositionProps & { container?: boolean };

const Box = styled.div<BoxProps>`
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
