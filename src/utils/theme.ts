/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
import styled, { createGlobalStyle, DefaultTheme, css, StyledComponent } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { lighten, darken } from 'polished';
import { inherits } from 'util';
import { Container } from 'reactstrap';

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

type ColorKeys = keyof Colors;

interface StyledElementProps {
  color: ColorKeys;
  bg: ColorKeys;
  dark: boolean;
  light: boolean;
  children: string;
}

const helperCss = css<StyledElementProps>`
  color: ${props => props.theme.colors[props.color]};
  background: ${props => props.theme.colors[props.bg]};
`;

export const H1 = styled.h1<StyledElementProps>`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H2 = styled.h2<StyledElementProps>`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H3 = styled.h3<StyledElementProps>`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H4 = styled.h4<StyledElementProps>`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H5 = styled.h5<StyledElementProps>`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const H6 = styled.h6<StyledElementProps>`
  ${props => props && helperCss}
  margin-top: 0;
`;

export const Section = styled(Container)<StyledElementProps>`
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
* {
  color: inherit;
}
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
