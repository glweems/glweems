import { createGlobalStyle, css } from 'styled-components'

const font = `'Karla', sans-serif`

const colors = {
  blue: `#5687e8`,
  green: `#5DB583`,
  red: `#ff5851`,
  muted: `#D1D6DB`,
  light: `#F7F7F7`,
  dark: `#24292e`,
  secondary: `#707070`,
  white: `#fff`,
}

const sizes = {
  phone: 576,
  tablet: 768,
  desktop: 992,
}

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
  width: 100%;
  font-family: ${props => props.theme.font};
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.dark};

  * {
    color: ${props => (props.light ? props.theme.colors.light : 'inherit')};
  }

  h1 {
    font-weight: unset;
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

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: hidden;
  }


  button,
  select {
    text-transform: none;
  }


  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button:hover,
  button:focus {
      background: inherit;
  }

  button:focus {
      outline: inherit;
  }


`

export default { sizes, colors, font }
