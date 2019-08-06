import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { lighten, darken } from 'polished';

export const media = generateMedia({
  lg: '960px',
  md: '720px',
  sm: '540px',
});

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
  bg: `#1f242f`,
};
const lightColors = {
  light: lighten(0.2, colors.light),
  dark: lighten(0.05, colors.dark),
  red: lighten(0.05, colors.red),
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
  dark: darken(0.05, colors.dark),
  red: darken(0.05, colors.red),
  green: darken(0.05, colors.green),
  yellow: darken(0.05, colors.yellow),
  blue: darken(0.05, colors.blue),
  purple: darken(0.05, colors.purple),
  mint: darken(0.05, colors.mint),
  muted: darken(0.05, colors.muted),
  bg: darken(0.05, colors.bg),
};

const theme: DefaultTheme = {
  borderRadius: `0.3em`,
  colors,
  lightColors,
  darkColors,
};

export { theme };

export const GlobalStyle = createGlobalStyle`

body {
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
}

input[type='submit'],
input[type='reset'],
input[type='button'],
button {
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
