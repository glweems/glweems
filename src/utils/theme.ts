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

const colors = {
  light: '#f7f7f7',
  dark: `#1a1e28`,
  red: `#d65947`,
  green: `#c3e28a`,
  yellow: `#f8d58c`,
  blue: `#89cefa`,
  purple: `#d0c1fa`,
  mint: `#a7e3cc`,
  muted: `#c6c7c6`,
  bg: `#181D2B`,
};

const lightColors = {
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
};
const darkColors = {
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
};

export const heatMapTheme = {
  background: colors.bg,
  text: colors.yellow,
  grade0: transparentize(0.95, colors.purple),
  grade1: transparentize(0.75, colors.purple),
  grade2: transparentize(0.5, colors.purple),
  grade3: transparentize(0.25, colors.purple),
  grade4: colors.purple,
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

export const theme: Theme = {
  borderRadius: `0.3em`,
  colors,
  lightColors,
  darkColors,
  shadow: makeShadow(colors.bg),
  hoverShadow: makeHoverShadow(colors.bg),
};

export type ColorKeys = keyof Colors;

export interface ColorProps extends DefaultTheme {
  color?: ColorKeys;
  bg?: ColorKeys;
}

export const helperCss = css<ColorProps>`
  color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.light)};
  background: ${props => (props.bg ? props.theme.colors[props.bg] : null)};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.light};
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
