import styled, { css } from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  margin,
  padding,
  size,
  SizeProps,
  SpaceProps,
} from 'styled-system';
import { media, GlweemsTheme } from '../../theme';

export interface ContainerProps
  extends BorderProps,
    ColorProps<GlweemsTheme>,
    LayoutProps,
    SizeProps,
    SpaceProps {
  fluid?: boolean;
}

export const maxWidthCss = css`
  max-width: ${({ theme }) => theme.breakpoints[1]};
  margin: auto;

  ${media.greaterThan('sm')`
  max-width: ${({ theme }) => theme.containerWidths.md};
`};

  ${media.greaterThan('md')`
  max-width: ${({ theme }) => theme.containerWidths.lg};
`};
`;

const Container = styled.div<ContainerProps>`
  ${color};
  ${layout};
  ${size};
  ${margin};
  ${padding};
  ${border};

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
