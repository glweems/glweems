import { createGlobalStyle, css } from 'styled-components'

const font = `'Karla', sans-serif`

const colors = {
  blue: `#5687e8`,
  green: `#5DB583`,
  red: `#ff5851`,
  muted: `#D1D6DB`,
}

const sizes = {
  phone: 576,
  tablet: 768,
  desktop: 992,
}

const light = {
  ...colors,
  mode: `light`,
  light: `#F7F7F7`,
  dark: `#24292e`,
  secondary: `#707070`,
  white: `#fff`,
  muted: `#83888D`,
  bg: `#F7F7F7`,
  text: `#24292e`,
}
const dark = {
  ...colors,
  mode: `dark`,
  dark: `#F7F7F7`,
  light: `#24292e`,
  secondary: `#707070`,
  white: `#fff`,
  bg: `#24292e`,
  text: `#F7F7F7`,
}

const theme = { light, dark }

export default theme

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyle = createGlobalStyle`

/* ${props =>
  props.mode &&
  css`
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
  `} */

  html {
    width: 100%;
  }

  body {
    background: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    font-family: ${font};
    max-width: 100%;
    overflow: hidden;
  }

  main {
    padding-top: 4rem;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img {
    background: none !important;
    padding: 0;
    margin: 0;
  }

  [role='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button {
    background: none;
    border: 0;
    color: inherit;
    cursor: default;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-appearance: button; /* for input */
    -webkit-user-select: none; /* for button */
    -moz-user-select: none;
    -ms-user-select: none;
  }
  input::-moz-focus-inner,
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  [role='button'] {
    color: inherit;
    cursor: default;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    white-space: pre;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  /* Demo */
  [role='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button {
    border-radius: 0.25em;
    height: 2.5em;
    line-height: 2.5;
    margin: 0.25em;
    padding: 0 .75em;
  }
    button:focus {
      outline:none;
    }


`
