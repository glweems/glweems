/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { createGlobalStyle, DefaultTheme, css } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { darken, tint, shade, transparentize } from 'polished';
import { BoxShadowProperty, ColorProperty } from 'csstype';
import theme from 'styled-theming';

const sameColors = {
  blue: `#1769ff`,
  green: `#4caf50`,
  mint: `#a7e3cc`,
  purple: `#d0c1fa`,
  red: `#d65947`,
  yellow: `#f8d58c`,
};

const testColors = theme.variants('mode', 'kind', {
  light: {
    primary: `black`,
    bg: `#f7f7f7`,
    muted: `#5a5a5a`,
    rootBg: `#fff`,
    text: `#252d3d`,
    ...sameColors,
  },
  dark: {
    primary: `#f8d58c`,
    bg: `#181D2B`,
    muted: `#c6c7c6`,
    rootBg: `#181D2B`,
    text: `#f7f7f7`,
    ...sameColors,
  },
});

export const media = generateMedia({
  lg: `960px`,
  md: `720px`,
  sm: `540px`,
});

const sharedColors = {
  blue: `#1769ff`,
  green: `#4caf50`,
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
  primary: `black`,
  bg: `#f7f7f7`,
  muted: `#5a5a5a`,
  rootBg: `#ededef`,
  text: `#252d3d`,
};

const socialColors = {
  github: `#333333`,
  linkedin: `#0077B5`,
  medium: `#00ab6c`,
  behance: `#1769ff`,
  instagram: `#E1306C`,
};

interface Colors {
  blue: string;
  green: string;
  mint: string;
  purple: string;
  red: string;
  yellow: string;
  primary: string;
  bg: string;
  muted: string;
  rootBg: string;
  text: string;
  [key: string]: string;
}

interface ColorsShades {
  blue?: string;
  green: string;
  mint: string;
  purple: string;
  red: string;
  yellow: string;
  primary: string;
  bg: string;
  muted: string;
  text: string;
  rootBg?: string;
}

interface HeatMap {
  background: ColorProperty;
  grade0: ColorProperty;
  grade1: ColorProperty;
  grade2: ColorProperty;
  grade3: ColorProperty;
  grade4: ColorProperty;
  text: ColorProperty;
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
    borderWidth: `3px` | string;
    navbarHeight: `4em` | string;
    github: `#333333` | string;
    linkedin: `#0077B5` | string;
    medium: `#00ab6c` | string;
    behance: `#1769ff` | string;
    instagram: `#E1306C` | string;
    testColors: any;
    containerWidth: string;
    container: {
      default?: `40em`;
      sm: string;
      md: string;
      lg: string;
    };
    heatMap: HeatMap;
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
    ...socialColors,
    testColors,
    darkColors: {
      bg: shade(+0.1, colors.bg),
      blue: shade(+0.1, colors.blue),
      green: shade(+0.1, colors.green),
      mint: shade(+0.1, colors.mint),
      muted: shade(+0.1, colors.muted),
      purple: shade(+0.1, colors.purple),
      red: shade(+0.1, colors.red),
      text: shade(+0.1, colors.text),
      primary: shade(+0.1, colors.primary),
      yellow: shade(+0.1, colors.yellow),
    },
    lightColors: {
      bg: tint(+0.5, colors.bg),
      blue: tint(+0.5, colors.blue),
      green: tint(+0.5, colors.green),
      mint: tint(+0.5, colors.mint),
      muted: tint(+0.5, colors.muted),
      purple: tint(+0.5, colors.purple),
      red: tint(+0.5, colors.red),
      text: tint(+0.5, colors.text),
      primary: tint(+0.5, colors.primary),
      yellow: tint(+0.5, colors.yellow),
    },
    shadow: isDarkMode
      ? `${darken(0.05, darkModeColors.bg)} 0px 1px 5px 0px,
         ${darken(0.09, darkModeColors.bg)} 0px 2px 2px 0px,
         ${darken(0.1, darkModeColors.bg)} 0px 3px 1px -2px`
      : `${darken(0.15, lightModeColors.bg)} 0px 1px 5px 0px,
         ${darken(0.2, lightModeColors.bg)} 0px 2px 2px 0px,
         ${darken(0.4, lightModeColors.bg)} 0px 3px 1px -2px`,
    hoverShadow: makeHoverShadow(colors.bg),
    borderWidth: `3px`,
    navbarHeight: `4em`,
    containerWidth: `50em`,
    container: {
      sm: `40em`,
      md: `45em`,
      lg: `50em`,
    },
    heatMap: {
      background: `transparent`,
      grade0: transparentize(0.95, colors.blue),
      grade1: transparentize(0.75, colors.blue),
      grade2: transparentize(0.5, colors.blue),
      grade3: transparentize(0.25, colors.blue),
      grade4: colors.blue,
      text: colors.primary,
    },
  };
};

const anchorStyles = css`
  a {
    position: relative;
    margin: 2px 6px 2px 6px;
    color: ${props => props.theme.colors.blue};
    font: inherit;
    font-weight: 500;
    font-size: 115% !important;
    letter-spacing: 0.08rem;
    text-decoration: none !important;
    vertical-align: baseline;
    border: 0;
    cursor: pointer;
  }

  a:hover {
    ::before {
      position: absolute;
      top: calc(100% - 6px);
      right: 0;
      bottom: -1px;
      left: 0;
      z-index: -1;
      background: ${props => `
    linear-gradient(to bottom, transparent 62%,
    ${darken(0.5, props.theme.colors.bg)} 0)
    center center/0% 75% no-repeat`};
      background-size: 95% 100%;
      transition: all 120ms ease-in-out;
      content: '';
    }
  }
  .activeLink {
    color: ${props => props.theme.colors.muted};
  }
`;

const buttonStyles = css`
  .button,
  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    display: inline-block;
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0.5em 1em;
    overflow: visible;
    color: ${props => props.theme.colors.bg};
    font: inherit;
    font-weight: 600;
    line-height: normal;
    white-space: normal;
    text-align: center;
    text-decoration: none;
    background: ${props => props.theme.colors.text};
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-property: background-color, border-color, color;
    user-select: none;
  }
`;

export const GlobalStyle = createGlobalStyle`

  html {
      font-size: var(--typography__fontSize);
    }

  body {
    color: ${props => props.theme.colors.text};
    line-height: var(--spacing__vertical--1);
    background: ${props => props.theme.colors.bg};
  }
  ${anchorStyles};
  ${buttonStyles};

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
    }

    li {
      margin: 0;
      text-align: left;
    }

    span {
      margin-left: 0.75em;
    }
  }

  .github {
    color: ${props => props.theme.github};
    :hover {
      color: ${props => props.theme.colors.text};
    }
  }

  .linkedin {
    color: ${props => props.theme.linkedin};
    :hover {
      color: ${props => props.theme.colors.text};
    }
  }

  .medium {
    color: ${props => props.theme.medium};
    :hover {
      color: ${props => props.theme.colors.text};
    }
  }

  .behance {
    color: ${props => props.theme.behance};
    :hover {
      color: ${props => props.theme.colors.text};
    }
  }

  .instagram {
    color: ${props => props.theme.instagram};
    :hover {
      color: ${props => props.theme.colors.text};
    }
  }

  #disqus_thread {
    padding: 1em;
    background: ${darkModeColors.bg};
    border-radius: ${props => props.theme.borderRadius};
  }
  `;
