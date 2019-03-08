import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../Theme";

const Div = styled.div`
  width: 100%;
  /* background: pink; */
`;

const Split = styled.div`
  // * Grid
  height: 80vh;
  display: flex;
  .half {
    /* height: 100%; */
    width: 50%;
  }
  .half:first-child {
    background: ${Theme.colors.red};
  }
`;

const Msg = styled.h1`
  margin: 0;
  line-height: 0.75;
  font-size: 10rem;
  font-style: italic;
  position: relative;
  text-align: left;
  top: 30%;
  left: 5rem;
`;

export default class Hello extends Component {
  render() {
    return (
      <Div>
        <Split>
          <div className="half">
            <Msg>
              He
              <br />
              llo
            </Msg>
          </div>
          <div className="half" />
        </Split>
      </Div>
    );
  }
}
