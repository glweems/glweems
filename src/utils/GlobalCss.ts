import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 html {
  scroll-behavior: smooth;
  max-height: 100vh;
  overflow-y: hidden;
}

html,
body {
  height: 100vh;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg};
  transition: color 0.25s linear;
  transition: background-color 0.25s ease-in-out;
}


body {
  --spinner-color: ${({ theme }) => theme.colors.secondaryBg};
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

a {
  text-decoration: none;
}

button,
.button {
  padding: 8px 10px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  background: transparent;
  border: none;
  border-radius: 3px;
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

.dark-mode a {
  color: ${({ theme }) => theme.colors.primary};
}
.dark-mode a:hover {
  text-decoration: underline;
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
  border-radius: ${({ theme }) => theme.borderWidths[1]};
}

iframe {
  border: none;
  border-radius: ${({ theme }) => theme.borderWidths[1]};
}

.anchor.before svg {
  fill: ${({ theme }) => theme.colors.primary};
}

.toggle-theme-button {
  text-align: center;
  fill: ${({ theme }) => theme.colors.text};
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
// @media (min-width: 480px) {
//     html {
//       font-size: 112.5%; /* --> 18px base size */
//     }
//   }
//   @media (min-width: 600px) {
//     html {
//       font-size: 125%; /* --> 20px base size */
//     }
//   }
