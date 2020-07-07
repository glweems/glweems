import styled, { css } from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  margin,
  size,
  SizeProps,
  SpaceProps,
} from 'styled-system';
import { media } from '../../theme';

export interface ContainerProps
  extends ColorProps,
    LayoutProps,
    SizeProps,
    SpaceProps {
  fluid?: boolean;
}
const maxWidthCss = css`
  max-width: ${({ theme }) => theme.breakpoints.sm};
  margin: auto;

  ${media.greaterThan('sm')`
  max-width: ${({ theme }) => theme.breakpoints.md};
`};

  ${media.greaterThan('md')`
  max-width: ${({ theme }) => theme.breakpoints.lg};
`};
`;

const Container = styled.div<ContainerProps>`
  ${color};
  ${layout};
  ${size};
  ${margin};

  ${({ fluid }) =>
    !fluid
      ? maxWidthCss
      : css`
          max-width: 100vw;
          .item {
            ${maxWidthCss};
          }
        `};
`;

Container.defaultProps = { width: '100%' };
export default Container;
