import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { designs } from "../Data";

const DesignWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  img {
    max-width: 100%;
  }
`;
const PortfolioItem = props => (
  <DesignWrapper>
    <p>{props.title}</p>
    <img src={require(`../images/designs/${props.src}`)} alt={props.title} />
  </DesignWrapper>
);

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default class Portfolio extends Component {
  render() {
    // const numbers = [1, 2, 3, 4, 5];
    const Designs = designs.map((design, index) => (
      <PortfolioItem key={index} {...design} />
    ));
    return (
      <Layout>
        <SEO title="portfolio" />

        {Designs}
      </Layout>
    );
  }
}
