import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';
import { buttonCss } from '../theme';

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


h1, h2, h3, h4, h5, h6 {
  border-color: var(--spinner-color);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
.button {

}

button:hover,
.button:hover,
a.active {
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

.date *,
.date :before,
.date :after {
  box-sizing: inherit;
}

.date {
  display: block;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 15px;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  line-height: 22px;
  text-decoration: none;
  border-radius: 3px;
  opacity: 0.75;
}

#disqus_thread {
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.space[1]};
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



.react-share__ShareButton {
  margin: 0;
  padding: 0;
  * {
    color: ${({ theme }) => theme.colors.red};
    fill: ${({ theme }) => theme.colors.red};
    rect { fill: none; }
  }
}
`;
