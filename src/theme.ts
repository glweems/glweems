import { useState } from 'react';
import { useMedia } from 'react-use';
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

function createColorVars(colorsObj: typeof baseColors, isDarkMode: boolean) {
  let obj = {
    '--color-welcome-bg': isDarkMode ? colorsObj.purple : colorsObj.yellow,
  };

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
   ${({ theme }) => createColorVars(theme.colors, theme.isDarkMode)};
   ${({ theme }) => createBreakpointVars(theme.breakpoints)};
   ${({ theme }) => createSpaceVars(theme.space)};
 }

  @media (min-width: 480px) {
    html {
      font-size: 112.5%; /* --> 18px base size */
    }
  }
  @media (min-width: 600px) {
    html {
      font-size: 125%; /* --> 20px base size */
    }
  }



 html {
  scroll-behavior: smooth;
  max-height: 100vh;
  overflow-y: hidden;
}
html,
body {
  height: 100vh;
  overflow-y: auto;
  color: var(--color-text);
  background-color: var(--color-bg);
  transition: color 0.25s linear;
  transition: background-color 0.25s ease-in-out;
}


body {
  --spinner-color: var(--color-secondary-bg);
  background: linear-gradient(
      45deg,
      transparent 49%,
      var(--spinner-color) 50%,
      var(--spinner-color) 50%,
      transparent 51%,
      transparent
    ),
    linear-gradient(
      -45deg,
      transparent 49%,
      var(--spinner-color) 50%,
      var(--spinner-color) 50%,
      transparent 51%,
      transparent
    );
  background-position: 0% 0%;
  background-size: 16px 16px;
  border: 1px var(--spinner-color) solid;
  border-radius: 4px;
}

a {
  text-decoration: none;
}

button,
.button {
  padding: 8px 10px;
  color: var(--color-text);
  text-decoration: none;
  background: transparent;
  border: none;
  border-radius: 3px;
}
button:hover,
.button:hover {
  background: var(--color-secondary-bg);
}
button:focus,
.button:focus {
  outline: var(--color-primary);
}

button:disabled {
  color: var(--color-root-bg);
}

.dark-mode a {
  color: var(--color-yellow);
}
.dark-mode a:hover {
  text-decoration: underline;
}

svg {
  font: unset;
  vertical-align: text-top;
}

img {
  border-radius: 0.125rem;
}

.date *,
.date :before,
.date :after {
  box-sizing: inherit;
}

.date {
  display: block;
  color: var(--color-text-secondary);
  font-size: 15px;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  line-height: 22px;
  text-decoration: none;
  border-radius: 3px;
  opacity: 0.75;
}

#disqus_thread {
  padding: 1rem;
  background-color: var(--color-light);
  border-radius: 0.5rem;
}

iframe {
  border: none;
  border-radius: 0.25rem;
}

.anchor.before svg {
  fill: var(--color-primary);
}

.toggle-theme-button {
  text-align: center;
  fill: var(--color-text);
}

.flex {
  display: flex;
}



.react-share__ShareButton {
  margin: 0;
  padding: 0;
  * {
    color: var(--color-red);
    fill: var(--color-red);}
    rect {fill: none;
  }
}

`;

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
