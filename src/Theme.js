/* eslint-disable no-restricted-syntax */
import styled from 'styled-components';

export default {
  headingFont: `IBM Plex Sans, sans-serif;`,
  colors: {
    red: `#ff5851`,
    dark: `#24292e`,
    bg: `#fff`,
    light: `#EEEEEE`,
  },
};

const ScreenSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const MQ = {};
for (const key in ScreenSizes) {
  if (key)
    MQ[key] = styles =>
      `@media screen and (min-width: ${ScreenSizes[key]}) { ${styles} }`;
}

export const Container = styled.div`
width: 100%;
margin: 0 auto;
${MQ.mobileS(`max-width: 540px`)}
${MQ.mobileM(`max-width: 720px`)}
${MQ.mobileL(`max-width: 720px`)}
${MQ.tablet(`max-width: 720px`)}
${MQ.laptop(`max-width: 1024px`)}
${MQ.laptopL(`max-width: 1140px`)}
${MQ.desktop(`max-width: 1140px`)}`;
