import Typography, { TypographyOptions } from 'typography';
import CodePlugin from 'typography-plugin-code';

const theme: TypographyOptions = {
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'Roboto',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 2,
  headerWeight: 700,
  bodyWeight: 'normal',
  boldWeight: 600,
};

theme.plugins = [new CodePlugin()];

const typography = new Typography(theme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
