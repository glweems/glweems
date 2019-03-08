import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Theme from "../Theme";

const StyledHello = styled.div``;

const Split = styled.div`
  // * Grid
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-template-rows: 1fr;
  .half {
    height: 100%;
    max-width: 100%;
    min-width: 100%;
  }
  .half:first-child {
    background: ${Theme.colors.dark};
  }
`;

const Content = styled.div`
  min-width: 100vw;
  position: relative;
  top: 45%;
  align-content: center;
  right: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  * {
    margin: 0;
    padding: 0;
  }
`;
const Msg = styled.h1`
  margin: 0;
  line-height: 0.75;
  font-size: 10rem;
  font-style: italic;
  text-align: center;
`;

export default class Hello extends Component {
  render() {
    return (
      <StyledHello>
        <Split>
          <div className="half">
            <Content>
              <Msg>
                HE
                <br />
                LLO
              </Msg>
            </Content>
          </div>
          <div className="half" />
        </Split>
      </StyledHello>
    );
  }
}
