import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const StyledAvitar = styled(Img)`
  border-radius: 0.25em;
`;

const Avitar = () => {
  const data = useStaticQuery(graphql`
    query AvitarQuery {
      file(relativePath: { eq: "avi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <StyledAvitar fluid={data.file.childImageSharp.fluid} />;
};

export default Avitar;
