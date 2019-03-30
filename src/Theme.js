/* eslint-disable no-restricted-syntax */
import styled from 'styled-components'

const Theme = {
  headingFont: `IBM Plex Mono`,
  colors: {
    white: `#fff`,
    light: `#F7F7F7`,
    dark: `#24292e`,
    secondary: `#707070`,
    muted: `#D1D6DB`,
    red: `#ff5851`,
    blue: `#5687e8`,
    green: `#5DB583`,
  },
  breakpoints: {
    mobileS: `320px`,
    mobileM: `375px`,
    mobileL: `425px`,
    tablet: `639px`,
    laptop: `1140px`,
    laptopL: `1440px`,
    desktop: `2560px`,
  },
  fontFamily: {
    header: 'IBM Plex Mono',
    body: 'Roboto',
  },
}

export const ThemeProvider = styled.div`
  width: 100%;
  font-family: 'Roboto';
  background: ${Theme.colors.white};
  color: ${Theme.colors.dark};

  input,
  textarea {
    border: none;
    background: ${Theme.colors.white};
    border-bottom: 1.125px solid ${Theme.colors.dark};
    /* padding-left: 0.5rem; */
  }

  a {
    color: ${Theme.colors.blue};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
    :visited {
      color: inherit;
    }
  }
`

const ScreenSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 639,
  laptop: 1140,
  laptopL: 1440,
  desktop: 2560,
}

export const MQ = {}
for (const key in ScreenSizes) {
  if (key)
    MQ[key] = styles =>
      `@media screen and (min-width: ${ScreenSizes[key]}px) { ${styles} }`
}

export default Theme
