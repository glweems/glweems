import React from 'react';
import Img from 'gatsby-image';
import useGlweemsQuery from '../graphql/LogoQuery';

export const Logo = () => (
  <div style={{ marginBottom: '-.265em' }}>
    <Img {...useGlweemsQuery().file.childImageSharp} />
  </div>
);

export default Logo;
