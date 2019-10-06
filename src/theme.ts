import theme from 'styled-theming';
import { createGlobalStyle, css } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { darken, lighten } from 'polished';
import { rhythm } from './utils/typography';

export { rhythm, scale, options } from './utils/typography';
export const blue = `#1769ff`;
export const green = `#4caf50`;
export const mint = `#a7e3cc`;
export const purple = `#d0c1fa`;
export const red = `#d65947`;
export const darkRed = darken(0.1, red);
export const yellow = `#f8d58c`;
export const darkYellow = darken(0.1, yellow);
export const primary = theme('mode', { light: red, dark: yellow });
export const darkPrimary = theme('mode', { light: darkRed, dark: darkYellow });
export const muted = theme('mode', { light: '#5a5a5a', dark: '#c6c7c6' });
export const text = theme('mode', { light: '#252d3d', dark: '#f7f7f7' });
export const bg = theme('mode', { light: '#fff', dark: '#0f121b' });
export const rootBg = theme('mode', { light: '#f8f8f8', dark: '#181D2B' });
export const borderColor = theme('mode', {
  light: '#c6c7c6',
  dark: darken(0.1, '#252d3d'),
});
export const linkBg = theme('mode', { light: mint, dark: yellow });
export const linkColor = theme('mode', { light: text, dark: bg });
export const lightMuted = '#5a5a5a';
export const darkMuted = '#c6c7c6';

// export const shadow = `#0f121b 0px 1px 5px 0px,
// #08090e 0px 2px 2px 0px,
// #06070a 0px 3px 1px -2px;`;

export const base = {
  light: `#f7f7f7`,
  dark: `#0f121b`,
};

export const gridGap = (num: number) => rhythm(num * 0.25);
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
  sm: `540px`,
  md: `720px`,
  lg: `960px`,
  xl: `1200px`,
};

export const media = generateMedia({
  sm: containerWidths.sm,
  md: containerWidths.md,
  lg: containerWidths.lg,
  xl: containerWidths.xl,
});

export const github = theme('mode', { light: '#333333', dark: '#f7f7f7' });
export const githubHover = theme('mode', {
  light: lighten(0.5, `#333333`),
  dark: darken(0.3, `#f7f7f7`),
});

export const linkedin = `#0077B5`;
export const linkedinHover = darken(0.1, linkedin);

export const medium = `#00ab6c`;
export const mediumHover = darken(0.1, medium);

export const behance = `#1769ff`;
export const behanceHover = darken(0.1, behance);

export const instagram = `#E1306C`;
export const instagramHover = darken(0.1, instagram);

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
  a {
    color: ${text};
    text-decoration: none;
    border-bottom: 3px solid ${linkBg};
    :hover {
      color: ${linkColor};
      background: ${linkBg};
    }
  }
`;

export const GlobalStyle = createGlobalStyle`


  ${anchorStyles}
  ${buttonStyles}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border: none;

    .anchor {
      float: left;
      margin-left: -20px;
      padding-right: 4px;
      color: ${muted};
      line-height: 1;
      visibility: hidden;
    }
    .anchor:focus {
      outline: none;
    }
    /* h1 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  } */
    .octicon-link {
      color: ${muted};
      vertical-align: middle;
      visibility: hidden;
    }
    :hover {

      .anchor {
        text-decoration: none;
        visibility: visible;
      }
      .octicon-link {
        padding-bottom: 0.3em;
        font-size: 2em;
        border-bottom: 1px solid #eaecef;
        visibility: visible;
      }
    }
  }


  html {
    /* font-size: var(--typography__fontSize); */
  }

  body {
    color: ${text};
    /* line-height: var(--spacing__vertical--1); */
    background: ${bg};
  }


  main {
    padding-top: ${rhythm(1)};
  }

  section {
    margin: ${rhythm(1)} 0;
  }


  footer {
    width: 100%;
    margin: 0;
    padding: ${rhythm(1)} 0;
  }

  .hashtag {
    color: ${bg};
  }


  .social-icon {
    transition: all 0.25s ease;
  }

  .github {
    color: ${github};
    :hover {
      color: ${githubHover};
    }
  }

  .linkedin {
    color: ${linkedin};
    :hover {
      color: ${linkedinHover};
    }
  }

  .medium {
    color: ${medium};
    :hover {
      color: ${mediumHover};
    }
  }

  .behance {
    color: ${behance};
    :hover {
      color: ${behanceHover};
    }
  }

  .instagram {
    color: ${instagram};
    :hover {
      color: ${instagramHover};
    }
  }

  #disqus_thread {
    padding: 1em;
    background: ${bg};
    border-radius: ${borderRadius};
  }
  .react-github-calendar {
    grid-column: full;
    align-self: end;
    width: 100%;
    min-height: 7em;
    margin: 0;
    padding: 0;
    padding-top: 1em;
    text-align: center;
  }

  .react-github-calendar__title {
    display: none;
  }
  .react-github-calendar__chart {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .react-github-calendar__meta {
    display: none;
    margin: 0;
    padding: 0;
  }

  #resume {
    max-width: 720px;
    margin: 0 auto;
  }

`;
