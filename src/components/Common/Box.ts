import styled, { css } from 'styled-components'
import {
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  PositionProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  color,
} from 'styled-system'
import theme, { containerWidths, GlweemsTheme, media } from '../../theme'

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    PositionProps,
    FlexboxProps,
    ColorProps<GlweemsTheme>,
    BorderProps {
  container?: boolean
}

export const maxWidthCss = css`
  /* max-width: ${({ theme }) => theme.breakpoints[1]}; */
  margin: auto;
  /* padding-right: ${(props) => props.theme.space[1]}; */
  /* padding-left: ${(props) => props.theme.space[1]}; */
`

export const boxComposition = compose(color, layout, space, flexbox, border)

const Box = styled.div<BoxProps>`
  ${color};
  ${layout};
  ${space};
  ${flexbox};
  ${border};
  ${(props) => props && props.container && maxWidthCss};
`

Box.displayName = 'Box'

export default Box
