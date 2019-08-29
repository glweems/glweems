import React from 'react';
import Img from 'gatsby-image';
import useGlweemsQuery from '../graphql/GlweemsQuery';

export const Logo = () => (
  <div style={{ padding: '.25em', marginBottom: '-.265em' }}>
    <Img {...useGlweemsQuery().file.childImageSharp} />
  </div>
);

export default Logo;
