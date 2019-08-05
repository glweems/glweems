import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { lighten, darken } from 'polished';

export const media = generateMedia({
  lg: '960px',
  md: '720px',
  sm: '540px',
});

const baseColors = {
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

const altColors = (
  colors: typeof baseColors,
  modifier: Function,
  amount: string,
): typeof baseColors => {
  const alt: typeof baseColors = colors;
  Object.keys(colors).map((key: any): void => {
    alt[key] = modifier(amount, alt[key]);
  });

  return alt;
};

// const colorShades = {};

const theme: DefaultTheme = {
  borderRadius: `0.25em`,
  colors: {
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
  },
  lightColors: altColors(baseColors, lighten, '.1'),
  darkColors: altColors(baseColors, darken, '.1'),
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
