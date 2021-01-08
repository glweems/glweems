import styled, { css } from 'styled-components'
import {
  color,
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
} from 'styled-system'
import { GlweemsTheme, media } from '../../theme'

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
  max-width: ${({ theme }) => theme.breakpoints[1]};
  margin: auto;

  ${media.greaterThan('sm')`
  max-width: ${({ theme }) => theme.containerWidths.md};
`};

  ${media.greaterThan('md')`
  max-width: ${({ theme }) => theme.containerWidths.lg};
`};
`

const boxComposition = compose(color, layout, space, flexbox, border)

const Box = styled.div<BoxProps>`
  ${boxComposition}
  ${(props) => props && props.container && maxWidthCss}
`

Box.displayName = 'Box'

export default Box
