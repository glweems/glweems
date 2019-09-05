import React from 'react';
import Img from 'gatsby-image';
import useLogoQuery from '../graphql/LogoQuery';

export const Logo = () => {
  const logo = useLogoQuery();
  return (
    <Img
      fixed={logo.childImageSharp.fixed}
      style={{ marginBottom: '-.265em' }}
    />
  );
};

export default Logo;
