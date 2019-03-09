import React, { Component } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Theme } from "../Theme";

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

export const Logo = styled.span`
  position: fixed;
  top: 0;
  left: 2rem;
  padding: 0.5rem 0.7rem 0.7rem 0.7rem;
  font-weight: bolder;
  font-style: italic;
  color: ${Theme.colors.bg};
  background: ${Theme.colors.dark};
  z-index: 2000;
  transition: all 1s ease-in-out;
`;

export class StickyLogo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ scroll: window.scrollY });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      show: this.state.scroll > window.scrollY,
      scroll: window.scrollY
    });
  }

  render = () => (
    <Logo className={this.state.show ? "logo" : "logo hidden"}>glweems</Logo>
  );
}

export default { Avitar, StickyLogo };
