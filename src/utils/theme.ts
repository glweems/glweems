import { createGlobalStyle } from 'styled-components';
import { generateMedia } from 'styled-media-query';

export const media = generateMedia({
  lg: '960px',
  md: '720px',
  sm: '540px',
});

export const theme = {
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

export const GlobalStyle = createGlobalStyle``;
