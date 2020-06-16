import Typography, { TypographyOptions } from 'typography';
import CodePlugin from 'typography-plugin-code';
import './style.css';
const theme: TypographyOptions = {
  baseFontSize: '16px',
  baseLineHeight: 1.5,
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
  bodyWeight: 'normal',
  boldWeight: 500
};

theme.plugins = [new CodePlugin()];

const typography = new Typography(theme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
