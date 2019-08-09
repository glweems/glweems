import styled, { StyledFunction, createGlobalStyle, DefaultTheme, css } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { lighten, darken } from 'polished';
import Img from 'gatsby-image';

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
  bg: `#1f242f`,
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
  bg: darken(0.1, colors.bg),
};

export const heatMapTheme = {
  background: lightColors.dark,
  text: colors.yellow,
  grade4: darken(0.5, colors.green),
  grade3: darken(0.3, colors.green),
  grade2: colors.green,
  grade1: lighten(0.1, colors.green),
  grade0: lightColors.red,
};

export interface Theme extends DefaultTheme {
  borderRadius: `0.3em`;
  colors: Colors;
  lightColors: Colors;
  darkColors: Colors;
}

export const theme: DefaultTheme = {
  borderRadius: `0.3em`,
  colors,
  lightColors,
  darkColors,
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

export const Image = styled(Img)<Img>``;

export const A = styled<StyledFunction>('a')`
  ${props => props && helperCss}
  :hover {
    color: ${props => props.theme.lightColors.red};
  }
`;

export const Span = styled.span`
  ${props => props && helperCss}
`;

export const P = styled.p`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H1 = styled('h1')`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H2 = styled('h2')`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H3 = styled.h3`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H4 = styled.h4`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H5 = styled.h5`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H6 = styled.h6`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const Section = styled.section`
  ${props => props && helperCss}
`;

// type CustomElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// const customElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

// const componentFactory = () => {
//   const custom = {};

//   customElements.map(
//     (el: string) =>
//       (custom[el.toUpperCase()] = styled[el]`
//         ${(props: DefaultTheme) => props && helperCss}
//       `),
//   );

//   return { ...custom };
// };

// export const Custom = componentFactory();

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
