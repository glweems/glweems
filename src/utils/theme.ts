/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { lighten, darken, transparentize } from 'polished';
import { BoxShadowProperty, ColorProperty } from 'csstype';

export const media = generateMedia({
  lg: '960px',
  md: '720px',
  sm: '540px',
});

const sharedColors = {
  blue: `#89cefa`,
  green: `#c3e28a`,
  mint: `#a7e3cc`,
  purple: `#d0c1fa`,
  red: `#d65947`,
  yellow: `#f8d58c`,
};

const darkModeColors = {
  ...sharedColors,
  primary: `#f8d58c`,
  bg: `#181D2B`,
  muted: `#c6c7c6`,
  rootBg: `#181D2B`,
  text: `#f7f7f7`,
};

const lightModeColors = {
  ...sharedColors,
  primary: `#1e88e5`,
  bg: `#f7f7f7`,
  muted: `#5a5a5a`,
  rootBg: `#ededef`,
  text: `#1a1e28`,
};

interface Colors {
  blue: `#89cefa` | string;
  green: `#c3e28a` | string;
  mint: `#a7e3cc` | string;
  purple: `#d0c1fa` | string;
  red: `#d65947` | string;
  yellow: `#f8d58c` | string;
  primary: string | string;
  bg: `#f7f7f7` | `#181D2B` | string;
  muted: `#5a5a5a` | `#c6c7c6` | string;
  rootBg: `#ededef` | `#181D2B` | string;
  text: `#1a1e28` | `#f7f7f7` | string;
  [key: string]: string | string;
}

interface ColorsShades {
  blue?: string;
  green: string;
  mint: string;
  purple: string;
  red: string;
  yellow?: string;
  primary: string;
  bg: string;
  muted: string;
  text: string;
  rootBg?: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: `light` | `dark`;
    isDarkMode: boolean;
    colors: Colors;
    lightColors: ColorsShades;
    darkColors: ColorsShades;
    borderRadius: `0.3em`;
    shadow: BoxShadowProperty;
    hoverShadow: BoxShadowProperty;
    heatMap: {
      background: `transparent`;
      grade0: ColorProperty;
      grade1: ColorProperty;
      grade2: ColorProperty;
      grade3: ColorProperty;
      grade4: ColorProperty;
      text: ColorProperty;
    };
  }
}

export const makeShadow = (color: string) => `
  ${darken(0.05, color)} 0px 1px 5px 0px,
  ${darken(0.09, color)} 0px 2px 2px 0px,
  ${darken(0.1, color)} 0px 3px 1px -2px`;

export const makeHoverShadow = (color: string) =>
  `${darken(0.1, color)} 0px 3px 20px 0px`;

export const makeTheme = (mode: 'light' | 'dark'): DefaultTheme => {
  const isDarkMode = mode === 'dark';
  const colors: Colors = isDarkMode ? darkModeColors : lightModeColors;

  return {
    mode,
    isDarkMode,
    colors,
    borderRadius: `0.3em`,
    darkColors: {
      bg: darken(0.3, colors.bg),
      blue: darken(0.25, colors.blue),
      green: darken(0.1, colors.green),
      mint: darken(0.1, colors.mint),
      muted: darken(0.1, colors.muted),
      purple: darken(0.1, colors.purple),
      red: darken(0.1, colors.red),
      text: darken(0.2, colors.text),
      primary: darken(0.2, colors.primary),
    },
    lightColors: {
      bg: lighten(0.3, colors.bg),
      blue: lighten(0.05, colors.blue),
      green: lighten(0.05, colors.green),
      mint: lighten(0.05, colors.mint),
      muted: lighten(0.05, colors.muted),
      purple: lighten(0.05, colors.purple),
      red: lighten(0.1, colors.red),
      text: lighten(0.2, colors.text),
      primary: lighten(0.1, colors.primary),
    },
    shadow: isDarkMode
      ? `${darken(0.05, colors.bg)} 0px 1px 5px 0px,
         ${darken(0.09, colors.bg)} 0px 2px 2px 0px,
         ${darken(0.1, colors.bg)} 0px 3px 1px -2px`
      : `${darken(0.15, lightModeColors.bg)} 0px 1px 5px 0px,
         ${darken(0.2, lightModeColors.bg)} 0px 2px 2px 0px,
         ${darken(0.4, lightModeColors.bg)} 0px 3px 1px -2px`,
    hoverShadow: makeHoverShadow(colors.bg),
    heatMap: {
      background: `transparent`,
      grade0: transparentize(0.95, colors.primary),
      grade1: transparentize(0.75, colors.primary),
      grade2: transparentize(0.5, colors.primary),
      grade3: transparentize(0.25, colors.primary),
      grade4: colors.primary,
      text: colors.text,
    },
  };
};

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Base values */
    --typography__fontSize: 18px;
    --spacing__rhythmUnit: 1.778rem; /* 1.778rem * 18px = 32px */

    --border__width--default: 0.111rem; /* 2px */

    /* Calculations */
    --spacing__vertical--1: var(--spacing__rhythmUnit);
    --spacing__vertical--2: calc(2 * var(--spacing__rhythmUnit));
    --spacing__vertical--3: calc(3 * var(--spacing__rhythmUnit));
  }

  html {
    font-size: var(--typography__fontSize);
  }

  body {
    line-height: var(--spacing__vertical--1);
  }


  html,
  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.rootBg};
  }

  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0.4em 1em;
    overflow: visible;
    color: ${props => props.theme.colors.bg};
    line-height: normal;
    text-decoration: none;
    background: ${props => props.theme.colors.text};
    border: 0;
    border-radius: ${props => props.theme.borderRadius};

    cursor: pointer;
    :focus {
      outline: none;
    }
  }

  a {
    margin: 0;
    padding: 0;
    color:${props => props.theme.colors.primary};
  }

  a:hover {
    color: ${props => props.theme.darkColors.primary};
    text-decoration: underline;
  }

  footer {
    width: 100%;
    margin: 0;
    padding: 1.5em 0;
    section {
      margin-bottom: 1.5em;
    }
    h4 {
      margin-bottom: 0.75em;
      padding-bottom: 0.25em;
      color: ${props => props.theme.colors.muted};
    }

    ul {
      margin: 0;
      list-style: none;
      li {
        margin: 0;
        text-align: left;
        span {
          margin-left: 0.75em;
        }
      }
    }
  }

    #disqus_thread {
      padding: 1em;
      background: ${darkModeColors.bg};
      border-radius: ${props => props.theme.borderRadius};
    }
`;
