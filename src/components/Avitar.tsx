import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import useAvitarQuery from '../graphql/AvitarQuery';

const Image = styled(Img)`
  border-radius: ${props => props.theme.borderRadius};
`;

const Avitar = () => {
  const {
    file: { childImageSharp },
  } = useAvitarQuery();

  console.log('TCL: Avitar -> childImageSharp', childImageSharp);
  return <Image {...childImageSharp} />;
};

export default styled(Avitar)``;
