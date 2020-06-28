import { darken } from 'polished';
import { createGlobalStyle, css, DefaultTheme } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { Theme as SystemTheme } from 'styled-system';
import theme from 'styled-theming';
import Typography from 'typography';
import useDarkMode from 'use-dark-mode';
import typography from './utils/typography';

export const base = { light: `#f7f7f7`, dark: `#0f121b` };
export const blue = '#1769ff';
export const green = '#4caf50';
export const mint = '#a7e3cc';
export const purple = '#d0c1fa';
export const red = `#e44932`;
export const darkRed = darken(0.1, red);
export const yellow = '#f8d58c';
export const darkYellow = darken(0.1, yellow);
export const primary = theme('mode', { light: red, dark: yellow });
export const darkPrimary = theme('mode', { light: darkRed, dark: darkYellow });
export const muted = theme('mode', { light: '#5a5a5a', dark: '#c6c7c6' });
export const text = theme('mode', { light: '#252d3d', dark: '#f7f7f7' });
export const bg = theme('mode', { light: '#fff', dark: '#0f121b' });
export const rootBg = theme('mode', { light: '#f8f8f8', dark: '#181D2B' });
export const borderColor = theme('mode', { light: '#c6c7c6', dark: '#1b2027' });
export const secondaryText = theme('mode', {
  light: 'rgba(0, 0, 0, 0.54)',
  dark: 'rgba(255, 255, 255, 0.54)',
});
export const secondaryBg = theme('mode', {
  light: 'rgba(0, 0, 0, 0.05)',
  dark: 'rgba(255, 255, 255, 0.05)',
});
export const secondaryTheme = css`
  color: ${secondaryText};
  background: ${secondaryBg};
`;
export const tagBg = theme('mode', {
  light: 'rgba(37, 45, 61, 30)',
  dark: 'rgba(248, 248, 248, 10)',
});
export const tagColor = theme('mode', { light: base.light, dark: base.dark });

export const linkBg = theme('mode', { light: mint, dark: yellow });
export const linkColor = theme('mode', { light: text, dark: bg });
export const lightMuted = '#5a5a5a';
export const darkMuted = '#c6c7c6';

export const baseColors = {
  blue: '#1769ff',
  green: '#4caf50',
  mint: '#a7e3cc',
  purple: '#d0c1fa',
  red: '#e44932',
  yellow: '#f8d58c',
  light: '#f8f8f78',
  dark: '#0f121b',
};

type ColorObject = typeof baseColors & {
  primary: string;
  muted: string;
  text: string;
  bg: string;
  rootBg: string;
  borderColor: string;
  secondaryText: string;
};

const lightMode: ColorObject = {
  ...baseColors,
  primary: baseColors.red,
  muted: '#5a5a5a',
  text: '#252d3d',
  bg: '#fff',
  rootBg: '#f8f8f8',
  borderColor: '#c6c7c6',
  secondaryText: 'rgba(0, 0, 0, 0.54)',
};

const darkmode: ColorObject = {
  ...baseColors,
  primary: baseColors.yellow,
  muted: '#c6c7c6',
  text: '#f7f7f7',
  bg: '#0f121b',
  rootBg: '#181D2B',
  borderColor: '#1b2027',
  secondaryText: 'rgba(255, 255, 255, 0.54)',
};

export const containerWidths = {
  sm: `540px`,
  md: `720px`,
  lg: `960px`,
  xl: `1200px`,
};

export const media = generateMedia({
  sm: containerWidths.sm,
  md: containerWidths.md,
  lg: containerWidths.lg,
  xl: containerWidths.xl,
});

export interface Theme extends Typography, SystemTheme {
  toggle: () => void;
  isDarkMode: boolean;
  colors: ColorObject;
  mode: 'light' | 'dark';
  borderRadius: string;
}

export default function useCreateTheme(): DefaultTheme {
  const { value: isDarkMode, toggle } = useDarkMode();
  const mode: 'light' | 'dark' = isDarkMode ? 'dark' : 'light';

  const colors = isDarkMode ? darkmode : lightMode;
  // Default Breakpoints

  // default space for margin and padding
  const obj = {
    ...typography,
    toggle,
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    mode,
    colors,
    isDarkMode,
    fontWeights: [500, 600, 700, 800],
    borderRadius: '0.3rem',
  };

  return obj as Theme;
}

export const GlobalStyle = createGlobalStyle`
 :root {
   ${(props) => {
     let obj = {};

     Object.entries(props.theme.colors).forEach(
       ([key, value]) => (obj[`--color-${key}`] = value)
     );
     obj[`--color-bg-pattern`] = `var(--color-blue)`;
     return obj;
   }}
 }
`;
