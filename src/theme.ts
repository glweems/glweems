import { useState } from 'react';
import { useMedia } from 'react-use';
import { DefaultTheme } from 'styled-components';
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
  light: '#f8f8f8',
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

export const media = generateMedia<typeof breakpoints, DefaultTheme>(
  breakpoints
);

const partialTheme = {
  ...typography,
  breakpoints,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72].map((num) => `${num}px`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map((num) => `${num}px`),
  fontWeights: [500, 600, 700, 800],
  borderWidths: [0.125, 0.25, 0.5, 1].map((num) => `${num}em`),
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
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleNav(): void;
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

export default function useCreateTheme(): DefaultTheme {
  const { value: isDarkMode, toggle } = useDarkMode();
  const mode: 'light' | 'dark' = isDarkMode ? 'dark' : 'light';
  const colors = isDarkMode ? darkmode : lightMode;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const mobile = useMedia(`(max-width: ${breakpoints.sm})`);
  const tablet = useMedia(
    `(min-width: ${breakpoints.md}, max-width: ${breakpoints.lg})`
  );
  const desktop = useMedia(`(min-width: ${breakpoints.lg})`);

  function toggleNav() {
    setIsNavOpen((state) => !state);
  }

  const completeTheme = {
    colors,
    isDarkMode,
    mode,
    toggle,
    isNavOpen,
    setIsNavOpen,
    toggleNav,
    mobile,
    tablet,
    desktop,
    ...partialTheme,
  };

  return completeTheme;
}

export function useMediaQuery() {
  const sm = useMedia(`(min-width: ${breakpoints.sm})`);
  const md = useMedia(`(min-width: ${breakpoints.md})`);
  const lg = useMedia(`(min-width: ${breakpoints.lg})`);
  const mobile = useMedia(`(max-width: ${breakpoints.sm})`);
  const tablet = useMedia(
    `(min-width: ${breakpoints.md}, max-width: ${breakpoints.lg})`
  );
  const desktop = useMedia(`(min-width: ${breakpoints.lg})`);
  return { sm, md, lg, mobile, tablet, desktop };
}
