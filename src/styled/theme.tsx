import styled from 'styled-components'

const theme = {
  breakpoints: {
    mobileS: `320px`,
    mobileM: `375px`,
    mobileL: `425px`,
    tablet: `639px`,
    laptop: `1140px`,
    laptopL: `1440px`,
    desktop: `2560px`,
  },
  colors: {
    blue: `#5687e8`,
    dark: `#24292e`,
    green: `#5DB583`,
    light: `#F7F7F7`,
    muted: `#D1D6DB`,
    red: `#ff5851`,
    secondary: `#707070`,
    white: `#fff`,
  },
  font: `karla`,
  fontFamily: {
    body: 'Roboto',
    header: 'karla',
  },
}

export const ThemeProvider = styled.div`
  width: 100%;
  font-family: 'Karla';
  background: white;
  color: ${theme.colors.dark};
  a {
    color: ${theme.colors.blue}!important;
  }
  img {
    background: none !important;
    padding: 0;
    margin: 0;
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
  if (key) {
    MQ[key] = styles =>
      `@media screen and (min-width: ${ScreenSizes[key]}px) { ${styles} }`
  }
}

export default theme
