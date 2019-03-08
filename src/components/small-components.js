import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImgDiv = styled.div`
  padding: 1rem;
  img {
    border-radius: 2rem;
  }
`;

export const Avitar = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ImgDiv>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </ImgDiv>
    )}
  />
);
export default { Avitar };
