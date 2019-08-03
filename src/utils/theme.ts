import { createGlobalStyle } from 'styled-components';
import { generateMedia } from 'styled-media-query';

export const media = generateMedia({
  lg: '78em',
  md: '60em',
  sm: '42em',
});

export const theme = {
  light: '#f7f7f7',
  dark: `#1a1e28`,
  red: `#e48b7d`,
  green: `#c3e28a`,
  yellow: `#f8d58c`,
  blue: `#89cefa`,
  purple: `#d0c1fa`,
  mint: `#a7e3cc`,
  muted: `#c6c7c6`,
  bg: `#1f242f`,
};

export const GlobalStyle = createGlobalStyle``;
