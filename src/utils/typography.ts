import Typography, { TypographyOptions } from 'typography'
import CodePlugin from 'typography-plugin-code'
import { fonts } from '../theme'

const theme: TypographyOptions = {
  googleFonts: [
    {
      name: 'Inter',
      styles: ['400', '600', '700'],
    },
    {
      name: 'Sora',
      styles: ['400', '600', '700'],
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
