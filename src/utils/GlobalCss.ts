import { transparentize } from 'polished'
import { createGlobalStyle } from 'styled-components'
import { cssVariables, media } from '../theme'

const GlobalCss = createGlobalStyle`
  :root {
    ${cssVariables};
  }
  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    overflow: hidden;
    font-weight: normal;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
      'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    background-color: ${({ theme }) => theme.colors.bg};
    background-image: radial-gradient(
        ${(props) => transparentize(0.95, props.theme.colors.text)} 20%,
        transparent 20%
      ),
      radial-gradient(${(props) =>
        props.theme.colors.secondaryBg} 10%, transparent 10%);
    background-position: 0 0, 5px 3px;
    background-size: 20px 20px;
  }

  main {
    margin-top: ${({ theme }) => theme.space[10]};
    margin-bottom: ${({ theme }) => theme.space[10]};
    color: ${({ theme }) => theme.colors.text};
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
