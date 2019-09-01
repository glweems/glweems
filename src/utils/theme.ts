import { createGlobalStyle, DefaultTheme, css } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { lighten, darken, transparentize } from 'polished';

export const media = generateMedia({
  lg: '960px',
  md: '720px',
  sm: '540px',
});

interface Colors {
  light: string;
  dark: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  purple: string;
  mint: string;
  muted: string;
  bg: string;
}

const sharedColors = {
  red: `#d65947`,
  green: `#c3e28a`,
  yellow: `#f8d58c`,
  blue: `#89cefa`,
  purple: `#d0c1fa`,
  mint: `#a7e3cc`,
  muted: `#c6c7c6`,
};

const darkModeColors = {
  light: `#f7f7f7`,
  dark: `#1a1e28`,
  bg: `#181D2B`,

  text: `#f7f7f7`,
  rootBg: `#181D2B`,
  ...sharedColors,
};

const lightModeColors = {
  dark: `#f7f7f7`,
  light: `#1a1e28`,
  bg: `white`,

  text: `#1a1e28`,
  rootBg: `#ffffff`,
  ...sharedColors,
};

const lightColors = {
  light: lighten(0.2, lightModeColors.light),
  dark: lighten(0.05, lightModeColors.dark),
  red: lighten(0.1, lightModeColors.red),
  green: lighten(0.05, lightModeColors.green),
  yellow: lighten(0.05, lightModeColors.yellow),
  blue: lighten(0.05, lightModeColors.blue),
  purple: lighten(0.05, lightModeColors.purple),
  mint: lighten(0.05, lightModeColors.mint),
  muted: lighten(0.05, lightModeColors.muted),
  bg: lighten(0.3, lightModeColors.bg),
};
const darkColors = {
  light: darken(0.2, darkModeColors.light),
  dark: darken(0.1, darkModeColors.dark),
  red: darken(0.1, darkModeColors.red),
  green: darken(0.1, darkModeColors.green),
  yellow: darken(0.1, darkModeColors.yellow),
  blue: darken(0.1, darkModeColors.blue),
  purple: darken(0.1, darkModeColors.purple),
  mint: darken(0.1, darkModeColors.mint),
  muted: darken(0.1, darkModeColors.muted),
  bg: darken(0.07, darkModeColors.bg),
};

export const heatMapTheme = {
  background: `transparent`,
  text: sharedColors.yellow,
  grade0: transparentize(0.95, sharedColors.purple),
  grade1: transparentize(0.75, sharedColors.purple),
  grade2: transparentize(0.5, sharedColors.purple),
  grade3: transparentize(0.25, sharedColors.purple),
  grade4: sharedColors.purple,
};

const makeShadow = (color: string) => `
  ${darken(0.05, color)} 0px 1px 5px 0px,
  ${darken(0.09, color)} 0px 2px 2px 0px,
  ${darken(0.1, color)} 0px 3px 1px -2px`;

const makeHoverShadow = (color: string) => `${darken(0.1, color)} 0px 3px 20px 0px`;

export interface Theme extends DefaultTheme {
  borderRadius: `0.3em`;
  colors: Colors;
  lightColors: Colors;
  darkColors: Colors;
  shadow: string;
}

export const makeTheme = (mode: 'light' | 'dark') => {
  const colors = mode === 'dark' ? darkModeColors : lightModeColors;

  return {
    mode,
    colors,
    borderRadius: `0.3em`,
    darkColors: {
      light: darken(0.2, colors.light),
      dark: darken(0.1, colors.dark),
      red: darken(0.1, colors.red),
      green: darken(0.1, colors.green),
      yellow: darken(0.1, colors.yellow),
      blue: darken(0.1, colors.blue),
      purple: darken(0.1, colors.purple),
      mint: darken(0.1, colors.mint),
      muted: darken(0.1, colors.muted),
      bg: darken(0.07, colors.bg),
    },
    lightColors: {
      light: lighten(0.2, colors.light),
      dark: lighten(0.05, colors.dark),
      red: lighten(0.1, colors.red),
      green: lighten(0.05, colors.green),
      yellow: lighten(0.05, colors.yellow),
      blue: lighten(0.05, colors.blue),
      purple: lighten(0.05, colors.purple),
      mint: lighten(0.05, colors.mint),
      muted: lighten(0.05, colors.muted),
      bg: lighten(0.3, colors.bg),
    },
    shadow: makeShadow(colors.bg),
    hoverShadow: makeHoverShadow(colors.bg),
  };
};

export type ColorKeys = keyof Colors;

export const helperCss = css<ColorProps>`
  color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.text)};
  background: ${props => (props.bg ? props.theme.colors[props.bg] : null)};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.bg};
  }

  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    box-sizing: content-box;
    padding: 0;
    overflow: visible;
    line-height: normal;
    background: none;
    border: 0;

  cursor: pointer;
    :focus {
      outline: none;
    }
}
`;
