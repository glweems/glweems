/* eslint-disable no-restricted-syntax */
import styled from 'styled-components'

const Theme = {
  headingFont: `IBM Plex Mono`,
  colors: {
    white: `#fff`,
    light: `#F7F7F7`,
    dark: `#24292e`,
    secondary: `##707070`,
    red: `#ff5851`,
    blue: `#5687e8`,
    bg: `#fff`,
  },
  'border-radius': `3px`,
  padding: `1rem;`,
  fontFamily: {
    header: 'Source Sans Pro',
    body: 'Roboto',
  },
}

export const ThemeProvider = styled.div`
  width: 100%;
  font-family: 'Roboto';
  background: ${Theme.colors.light};
  color: ${Theme.colors.dark};

  input,
  textarea {
    border: none;
    background: ${Theme.colors.white};
    border-bottom: 1.125px solid ${Theme.colors.dark};
    /* padding-left: 0.5rem; */
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      width: 100%;
      max-width: 500px;
      margin-bottom: 1rem;
    }
  }
  .submit {
    background: ${Theme.colors.red};
    border: none;
    color: ${Theme.colors.white};
    border-radius: ${Theme['border-radius']};
    padding: 0.25rem 0;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    :visited {
      color: unset;
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
