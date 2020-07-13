import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 html {
  scroll-behavior: smooth;
  }
  html,
  body {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};
    transition: color 0.25s linear;
    transition: background-color 0.25s ease-in-out;
  }


body {
    min-height: 100vh;
  --spinner-color: ${({ theme }) => theme.colors.secondaryBg};
    overflow: hidden;
    font-weight: normal;
    font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    background: linear-gradient(
        45deg,
        transparent 49%,
        var(--spinner-color) 50%,
        var(--spinner-color) 50%,
        transparent 51%,
        transparent
      ),
      linear-gradient(
        -45deg,
        transparent 49%,
        var(--spinner-color) 50%,
        var(--spinner-color) 50%,
        transparent 51%,
        transparent
      );
    background-position: 0% 0%;
    background-size: 16px 16px;
    border: 1px var(--spinner-color) solid;
    border-radius: 4px;
  }

  main {
    margin-top: ${({ theme }) => theme.space[10]};
    margin-bottom: ${({ theme }) => theme.space[10]};
  }

a {
  color: inherit;
  text-decoration-thickness: .125em;
  text-underline-offset: 1.5px;
  text-decoration-skip-ink: auto;
  text-decoration-color: ${({ theme }) => theme.colors.blue};
}

button:hover,
.button:hover {
  background: ${({ theme }) => theme.colors.secondaryBg};
}

button:focus,
.button:focus {
  outline: ${({ theme }) => theme.colors.primary};
}

button:disabled {
  color: ${({ theme }) => theme.colors.rootBg};
}

.icon {
  /* color: ${({ theme }) => theme.colors.text}; */
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
  fill: ${({ theme }) => theme.colors.primary};
}

.flex {
  display: flex;
}
`;
