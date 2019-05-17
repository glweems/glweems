// Styled.js
// import styled from 'styled-components';
// import { Theme, Breakpoints } from './Theme';

// export const Container = styled.div`
//   padding: ${Theme.padding};
// `;

const ScreenSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 639,
  laptop: 1140,
  laptopL: 1440,
  desktop: 2560,
}

const MQ = {}
for (const key in ScreenSizes) {
  if (key)
    MQ[key] = styles =>
      `@media screen and (min-width: ${ScreenSizes[key]}px) { ${styles} }`
}

// export const Container = styled.div`
//   max-width: 100%;
//   overflow: scroll;
//   margin: 0 auto;
//   padding: ${Theme.padding};
//   ${MQ.laptopL(`max-width: 1140px`)}
//   ${MQ.desktop(`max-width: 1440px`)};
// `;z
console.log()
