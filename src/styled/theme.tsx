import styled from 'styled-components'

const theme = {
  breakpoints: {
    mobileS: `320px`,
    mobileM: `375px`,
    mobileL: `425px`,
    tablet: `639px`,
    laptop: `1140px`,
    laptopL: `1440px`,
    desktop: `2560px`
  },
  colors: {
    blue: `#5687e8`,
    dark: `#24292e`,
    green: `#5DB583`,
    light: `#F7F7F7`,
    muted: `#D1D6DB`,
    red: `#ff5851`,
    secondary: `#707070`,
    white: `#fff`
  },
  font: `karla`,
  fontFamily: {
    body: 'Roboto',
    header: 'karla'
  }
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
  button {
    border: none;
  }
`

const ScreenSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 639,
  laptop: 1140,
  laptopL: 1440,
  desktop: 2560
}

export const MQ = {
  mobileS: styles =>
    `@media screen and (min-width: ${ScreenSizes.mobileS}px) { ${styles} }`,
  mobileM: styles =>
    `@media screen and (min-width: ${ScreenSizes.mobileM}px) { ${styles} }`,
  mobileL: styles =>
    `@media screen and (min-width: ${ScreenSizes.mobileL}px) { ${styles} }`,
  tablet: styles =>
    `@media screen and (min-width: ${ScreenSizes.tablet}px) { ${styles} }`,
  laptop: styles =>
    `@media screen and (min-width: ${ScreenSizes.laptop}px) { ${styles} }`,
  laptopL: styles =>
    `@media screen and (min-width: ${ScreenSizes.laptopL}px) { ${styles} }`,
  desktop: styles =>
    `@media screen and (min-width: ${ScreenSizes.desktop}px) { ${styles} }`
}

export default theme
