import styled, { css } from 'styled-components'
import { media } from '../../theme'

export type FlexProperty = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-evenly'

export interface FlexCssProps {
  alignContent?: FlexProperty
  alignItems?: FlexProperty
  justifyContent?: FlexProperty
  justifyItems?: FlexProperty
  flexDirection?: 'row' | 'column'
}

interface FlexProps extends FlexCssProps {
  sm?: FlexCssProps
}

export const createFlexProps = ({
  alignContent = 'center',
  alignItems = 'center',
  justifyContent = 'center',
  justifyItems = 'center',
  flexDirection = 'row'
}: FlexCssProps) => css`
  flex-direction: ${flexDirection};
  align-content: ${alignContent || alignContent};
  align-items: ${alignItems || alignItems};
  justify-content: ${justifyContent || justifyContent};
  justify-items: ${justifyItems || justifyItems};
`

export const flexStyles = css<FlexProps>`
  display: flex;
  ${props => props && createFlexProps(props)}

  ${({ sm }) =>
    sm &&
    media.lessThan('md')`
      ${createFlexProps(sm)}
    `};
`

export const Flex = styled.div<FlexProps>`
  ${flexStyles}
`
