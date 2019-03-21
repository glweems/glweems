/* eslint-disable no-restricted-syntax */
import styled from 'styled-components';

const Theme = {
  headingFont: `IBM Plex Sans, sans-serif;`,
  colors: {
    red: `#ff5851`,
    dark: `#24292e`,
    bg: `#fff`,
    light: `#EEEEEE`,
  },
  padding: `1rem;`,
  fontFamily: {
    header: 'Source Sans Pro',
    body: 'Roboto',
  },
};

// const headings = [h1, h2, h3, h4, h5, h6];

export const ThemeProvider = styled.div`
  font-family: 'Roboto';
  background: ${Theme.colors.light};
  color: ${Theme.colors.dark};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Source Sans Pro';
    font-weight: bold;
  }
`;

const ScreenSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 639,
  laptop: 1140,
  laptopL: 1440,
  desktop: 2560,
};

export const MQ = {};
for (const key in ScreenSizes) {
  if (key)
    MQ[key] = styles =>
      `@media screen and (min-width: ${ScreenSizes[key]}px) { ${styles} }`;
}

// const maxWidth = width => `max-width: ${width - width / 10}px;`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${Theme.padding};
  ${MQ.laptopL(`max-width: 1140px`)}
  ${MQ.desktop(`max-width: 1440px`)};
`;

export default Theme;
