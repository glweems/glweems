import { css } from 'styled-components'

const font = `'Karla', sans-serif`

const colors = {
  blue: `#5687e8`,
  dark: `#24292e`,
  green: `#5DB583`,
  light: `#F7F7F7`,
  muted: `#D1D6DB`,
  red: `#ff5851`,
  secondary: `#707070`,
  white: `#fff`,
  bg: `pink`,
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

export default { sizes, colors, font }
