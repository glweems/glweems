import { darken } from 'polished'
import styled from 'styled-components'
import Box from './Box'

const Paper = styled(Box)(({ theme: { colors, isDarkMode } }) => ({
  backgroundColor: darken(0.01, colors.rootBg),
  borderColor: isDarkMode ? '#ffffff24' : '#2721211f',
  // ...boxComposition,
}))

Paper.defaultProps = {
  // backgroundColor: 'rgba(256, 256, 256, 0.0125)',
  border: 1,
  padding: 4,
  borderRadius: 2,
  // borderColor: 'rgba(256, 256, 256, 0.05)',
  m: 'auto',
}

export default Paper
