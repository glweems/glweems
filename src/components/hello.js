import React, { Component } from 'react';
import styled from 'styled-components';
import Theme from 'src/Theme';

const Div = styled.div`
  width: 100%;
  margin-top: -2rem;
  z-index: 801;
`;

const Split = styled.div`
  height: 100vh;
  display: flex;
  transition: 100ms all ease-in-out;
  div:first-child {
    background: ${Theme.colors.red};
  }
  .w50 {
    width: 50%;
  }
  .w100 {
    width: 100%;
  }
`;

const Transition = styled.div`
  * {
    transition: 0.25s all ease-in-out;
  }
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
      scrollY: 0,
      splitDisplay: 'w50',
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      // scroll: window.scrollY,
      transitionStartDown: window.innerWidth / 9,
      transitionStartUp: window.innerWidth - window.innerWidth / 4,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const {
      grow,
      splitDisplay,
      scrollY,
      transitionStartDown,
      transitionStartUp,
    } = this.state;

    this.setState({
      grow: scrollY <= window.scrollY,
      splitDisplay:
        grow && scrollY >= transitionStartDown
          ? 'w100'
          : !grow && transitionStartUp >= window.scrollY
          ? 'w50'
          : splitDisplay,
    });
    this.setState({
      scrollY: window.scrollY,
    });
  }

  render() {
    const { splitDisplay } = this.state;
    return (
      <Div>
        <Transition>
          <Split>
            <div className={`${splitDisplay}`}>
              <Msg>
                He
                <br />
                llo
              </Msg>
            </div>
          </Split>
        </Transition>
      </Div>
    );
  }
}
