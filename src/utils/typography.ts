import Typography, { TypographyOptions } from 'typography';
import CodePlugin from 'typography-plugin-code';
import './style.css';
const theme: TypographyOptions = {
  baseFontSize: '18px',
  baseLineHeight: 1.5,

  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
    }
  ],
  headerFontFamily: [
    'Montserrat',
    'MADE Dillan Regular',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'Roboto',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ],
  bodyFontFamily: [
    'Montserrat',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol'
  ],
  scaleRatio: 2,
  headerWeight: 800,
  bodyWeight: 500,
  boldWeight: 700
};

theme.plugins = [new CodePlugin()];

const typography = new Typography(theme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
