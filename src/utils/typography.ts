import Typography, { TypographyOptions } from 'typography'
import CodePlugin from 'typography-plugin-code'
import { fonts } from '../theme'

const theme: TypographyOptions = {
  baseFontSize: '16px',
  baseLineHeight: 1.25,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '400i', '700', '700i', '800'],
    },
  ],
  headerFontFamily: fonts.heading.split(','),
  bodyFontFamily: fonts.body.split(','),
  headerWeight: 800,
  bodyWeight: 400,
  boldWeight: 700,
  plugins: [new CodePlugin()],
}

const typography = new Typography(theme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
