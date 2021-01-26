import { transparentize } from 'polished'
import { createGlobalStyle } from 'styled-components'
import { cssVariables, media } from '../theme'

const GlobalCss = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Sora:wght@400;600;700&display=swap");
:root {
   --color-primary: #000;
   --color-primary-alt: #ddd;
   --color-secondary: #fff;
   --font-family-primary: "Sora", sans-serif;
   --font-family-secondary: "Inter", "Sora", sans-serif;
   --font-size-h1: 2.5rem;
   --font-size-h2: 1.5rem;
   --font-size-h3: 1.25rem;
   --font-size-h4: 1.125rem;
   --font-size-text: 1rem;
}
  :root {
    ${cssVariables};
  }
  html {
    /* scroll-behavior: smooth; */
  }

  body {
    /* min-height: 100vh; */
    /* overflow: hidden; */
    /* color: ${({ theme }) => theme.colors.text}; */
    font-weight: normal;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
      'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  background-image: -webkit-repeating-radial-gradient(
      center center,
      var(--color-primary),
      var(--color-primary) 1px,
      var(--color-secondary) 1px,
      var(--color-secondary) 100%

   );
   background-size: 8px 8px;
  }
.title{
  margin-top:2rem;
  font-size:3rem;
}
  main {
    margin-top: ${({ theme }) => theme.space[10]};
    margin-bottom: ${({ theme }) => theme.space[10]};
  }

  a {
    color: inherit;
    color: var(--color-text);
    text-decoration-thickness: 0.125em;
    text-underline-offset: 1.5px;
    text-decoration-skip-ink: auto;
    text-decoration-color: ${({ theme }) => theme.colors.blue};
    &:hover {
      opacity: 0.75;
      text-decoration-color: ${({ theme }) => theme.colors.red};
    }
  }

  mark {
    color: ${({ theme }) => theme.colors.red};
    background-color: transparent;
  }

  .icon {
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    font: unset;
    vertical-align: text-top;
  }

  img {
    border-radius: 0.125rem;
  }

  time {
    display: block;
    color: ${({ theme }) => theme.colors.secondaryText};
    font: ${({ theme }) => theme.fonts.monospace};
    font-size: 90%;
    line-height: 22px;
    text-decoration: none;
    border-radius: 3px;
  }

  iframe {
    border: none;
    border-radius: ${({ theme }) => theme.space[1]};
  }

  .anchor.before svg {
    fill: ${({ theme }) => theme.colors.blue};
  }

  .flex {
    display: flex;
  }

  rect {
    shape-rendering: geometricPrecision;
    outline: 1px solid rgba(27, 31, 35, 0.04);
    outline-offset: -1px;
    rx: 2;
    ry: 2;
  }

  #disqus_thread {
    padding: 0 ${({ theme }) => theme.space[2]};
    ${media.greaterThan('sm')`
      padding: 0;
    `};
  }
`

export default GlobalCss
