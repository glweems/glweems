import theme from 'styled-theming';
import { createGlobalStyle, css } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { darken } from 'polished';

export const blue = `#1769ff`;
export const green = `#4caf50`;
export const mint = `#a7e3cc`;
export const purple = `#d0c1fa`;
export const red = `#d65947`;
export const yellow = `#f8d58c`;
export const primary = theme('mode', { light: red, dark: yellow });
export const muted = theme('mode', { light: '#5a5a5a', dark: '#c6c7c6' });
export const text = theme('mode', { light: '#252d3d', dark: '#f7f7f7' });
export const bg = theme('mode', { light: '#fff', dark: '#111' });
export const rootBg = theme('mode', { light: '#fff', dark: '#181D2B' });

// export const shadow = `#0f121b 0px 1px 5px 0px,
// #08090e 0px 2px 2px 0px,
// #06070a 0px 3px 1px -2px;`;

export const navbarHeight = `4em`;
export const borderRadius = `0.3em`;

const makeShadow = (color: string) => `
${darken(0.05, color)} 0px 1px 5px 0px,
${darken(0.09, color)} 0px 2px 2px 0px,
${darken(0.1, color)} 0px 3px 1px -2px`;

const makeHoverShadow = (color: string) =>
  `${darken(0.1, color)} 0px 3px 20px 0px`;

export const shadow = theme('mode', {
  light: makeShadow(`#c6c7c6`),
  dark: makeShadow(`#111`),
});
export const hoverShadow = theme('mode', {
  light: makeHoverShadow(`#c6c7c6`),
  dark: makeHoverShadow(`#111`),
});
export const containerWidths = {
  sm: `40em`,
  md: `45em`,
  lg: `50em`,
};

export const media = generateMedia({
  lg: `960px`,
  md: `720px`,
  sm: `540px`,
});

export const github = theme('mode', { light: '#333333', dark: '#f7f7f7' });

export const linkedin = `#0077B5`;

export const medium = `#00ab6c`;

export const behance = `#1769ff`;

export const instagram = `#E1306C`;

const buttonStyles = css`
  .button,
  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    display: inline-block;
    box-sizing: content-box;
    font: inherit;
    font-weight: 600;
    line-height: normal;
    white-space: normal;
    text-align: center;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
  }
`;

export const anchorStyles = css`
  .link {
    position: relative;
    margin: 2px 6px 2px 6px;
    color: ${blue};
    font: inherit;
    font-weight: 500;
    font-size: 115% !important;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    text-decoration: none !important;
    vertical-align: baseline;
    border: 0;
    cursor: pointer;
  }

  .link:hover {
    color: ${text};
  }

  .link.active {
    color: ${red};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${anchorStyles}
  ${buttonStyles}

  html {
    font-size: var(--typography__fontSize);
  }

  body {
    color: ${text};
    line-height: var(--spacing__vertical--1);
    background: ${bg};
  }

  main {
    margin-top: 2em;
  }

  section {
    margin: 1em 0;
    margin-bottom: 1.5em;
  }


  footer {
    width: 100%;
    margin: 0;
    padding: 1.5em 0;
  }

  .github {
    color: ${github};
    :hover {
      color: ${text};
    }
  }

  .linkedin {
    color: ${linkedin};
    :hover {
      color: ${text};
    }
  }

  .medium {
    color: ${medium};
    :hover {
      color: ${text};
    }
  }

  .behance {
    color: ${behance};
    :hover {
      color: ${text};
    }
  }

  .instagram {
    color: ${instagram};
    :hover {
      color: ${text};
    }
  }

  #disqus_thread {
    padding: 1em;
    background: ${bg};
    border-radius: ${borderRadius};
  }
`;