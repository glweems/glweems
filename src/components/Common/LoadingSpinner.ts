import styled from 'styled-components'
import {
  layout,
  LayoutProps,
  size,
  SizeProps,
  space,
  SpaceProps,
} from 'styled-system'

export type LoadingSpinnerProps = SpaceProps & LayoutProps & SizeProps

const LoadingSpinner = styled.div<LoadingSpinnerProps>`
  height: ${({ height, theme }) => theme.space[height]};
  --spinner-color: ${({ theme }) =>
    theme.isDarkMode ? theme.colors.purple : theme.colors.yellow};

  background: linear-gradient(45deg, transparent 49%, var(--spinner-color) 50%, var(--spinner-color) 50%, transparent 51%, transparent), linear-gradient(-45deg, transparent 49%, var(--spinner-color) 50%, var(--spinner-color) 50%, transparent 51%, transparent);
  background-position: 0% 0%;
  background-size: 16px 16px;
  border: 1px var(--spinner-color) solid;
  border-radius: 4px;
  animation: spTexture 1s infinite linear;
}

@keyframes spTexture {
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: -16px 0px;
  }

   ${space};
   ${layout};
   ${size};
`

LoadingSpinner.defaultProps = { height: 3 }

export default LoadingSpinner
