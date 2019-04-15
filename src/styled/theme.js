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
  light: `#F7F7F7`,
  dark: `#24292e`,
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

  small {
    color: ${props => props.theme.muted};
  }

${props =>
  props.noMargin &&
  css`
    * {
      margin: 0;
    }
  `}
${props =>
  props.noPadding &&
  css`
    * {
      padding: 0;
    }
  `}

  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button {
    box-sizing: content-box;
    background: none;
    border: 0;
    color: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    :focus {
      outline:none;
    }
  }
`
