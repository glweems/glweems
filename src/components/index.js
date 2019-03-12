import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Theme from 'src/Theme';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ImgDiv = styled.div`
  padding: 1rem;
  img {
    border-radius: 2rem;
  }
`;

export const StickyFooter = styled.footer`
  background: ${Theme.colors.dark};
  width: 100%;
  padding: 5rem 0;
  bottom: 0;
  right: 0;
  text-align: center;
  margin-top: -3rem;
  z-index: -1;
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

const Transition = styled.div`
  transition: 20ms all ease-in-out;
  * {
    transition: 20ms all ease-in-out;
  }
  .hidden {
    transform: translate(0, -2rem);
  }
`;

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
`;

export class StickyLogo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scroll: window.scrollY });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scroll } = this.state;
    this.setState({
      show: scroll > window.scrollY,
      scroll: window.scrollY,
    });
  }

  render = () => {
    const { show } = this.state;
    return (
      <Transition>
        <Logo className={show ? 'logo' : 'logo hidden'}>glweems</Logo>
      </Transition>
    );
  };
}

export default { Avitar, StickyLogo };
