import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { Theme as SystemTheme } from 'styled-system';
import { TypographyOptions } from 'typography';
import useDarkMode from 'use-dark-mode';
import typography from './utils/typography';

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
  secondaryBg: string;
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
  secondaryBg: 'rgba(0, 0, 0, 0.05)',
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
  secondaryBg: 'rgba(255, 255, 255, 0.05)',
};

export const breakpoints = {
  sm: `40em`,
  md: `52em`,
  lg: `64em`,
};

export const media = generateMedia(breakpoints);

const partialTheme = {
  ...typography,
  breakpoints,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map((num) => `${num}px`),
  fontWeights: [500, 600, 700, 800],
  media,
};

export interface Theme extends TypographyOptions, SystemTheme {
  toggle: () => void;
  isDarkMode: boolean;
  colors: ColorObject;
  mode: 'light' | 'dark';
  breakpoints: typeof breakpoints;
  space: string[];
  media: typeof media;
}

export default function useCreateTheme(): DefaultTheme {
  const { value: isDarkMode, toggle } = useDarkMode();
  const mode: 'light' | 'dark' = isDarkMode ? 'dark' : 'light';

  const colors = isDarkMode ? darkmode : lightMode;
  const completeTheme = {
    colors,
    isDarkMode,
    mode,
    toggle,
    ...partialTheme,
  };

  return completeTheme;
}

function createColorVars(colorsObj: typeof baseColors) {
  let obj = {};
  Object.entries(colorsObj).forEach(
    ([key, value]) => (obj[`--color-${key}`] = value)
  );
  return obj;
}

function createBreakpointVars(bps: typeof breakpoints) {
  let obj = {};
  Object.entries(bps).forEach(
    ([key, value]) => (obj[`--breakpoints-${key}`] = value)
  );
  return obj;
}

function createSpaceVars(spaces: string[]) {
  let obj = {};
  spaces.forEach((space, index) => {
    obj[`--space-${index}`] = space;
  });
  return obj;
}

export const GlobalStyle = createGlobalStyle`
 :root {
   ${(props) => createColorVars(props.theme.colors)};
   ${(props) => createBreakpointVars(props.theme.breakpoints)};
   ${(props) => createSpaceVars(props.theme.space)};
 }
`;
