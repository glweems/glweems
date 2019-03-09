import React, { Component } from "react";
import styled from "styled-components";
import Theme from "../Theme";

const Div = styled.div`
  width: 100%;
  margin-top: -2rem;
`;

const Split = styled.div`
  height: 80vh;
  display: flex;
  .half:first-child {
    background: ${Theme.colors.red};
  }
  transition: 1s all ease-in-out;
`;

const Msg = styled.h1`
  margin: 0;
  line-height: 0.75;
  font-size: 10rem;
  font-style: italic;
  position: relative;
  text-align: center;
  top: 30%;
  left: 50%;
`;

export default class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grow: true,
      scroll: window.scrollY,
      width: 50
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      grow: this.state.scroll > window.scrollY,
      scroll: window.scrollY
    });
    if (!this.setState.scroll > window.screenY) {
      this.setState({
        width: this.state.width + window.scrollY / window.innerHeight,
        scroll: window.scrollY
      });
    } else {
      this.setState({
        width: this.state.width - 1,
        scroll: window.scrollY
      });
    }
  }

  render() {
    return (
      <Div>
        <Split>
          <div className="half" style={{ width: `${this.state.width}%` }}>
            <Msg>
              He
              <br />
              llo
            </Msg>
          </div>
        </Split>
      </Div>
    );
  }
}
