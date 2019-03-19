import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from 'src/Theme';

const Button = styled.button`
  color: ${Theme.colors.bg};
  border: none;
  vertical-align: middle;
  ::before {
    content: 'MENU';
  }
  background: ${Theme.colors.dark};
`;

const Transition = styled.div`
  * {
    transition: 300ms all ease-in-out;
  }
  .hidden {
    transition: 300ms all ease-in-out;
    transform: translate(0, -100%);
  }
`;

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  font-weight: bolder;
  font-style: italic;
  color: ${Theme.colors.bg};
  background: ${Theme.colors.dark};
  *:first-child {
    margin-left: 1rem;
  }
  *:last-child {
    margin-right: 1rem;
  }
`;

const Brand = styled.div`
  color: white;
  text-transform: uppercase;
`;

export default class Navbar extends Component {
  static propTypes = {
    toggle: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    // eslint-disable-next-line no-unused-expressions
    window.scrollY > 10
      ? this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos,
        })
      : this.setState({ show: true });
  }

  render = () => {
    const { show } = this.state;
    const { toggle } = this.props;
    return (
      <Transition>
        <StyledNavbar className={show ? 'navbar' : 'navbar hidden'}>
          <Brand className="brand">
            <a href="/">glweems</a>
          </Brand>
          <Button onClick={toggle} />
        </StyledNavbar>
      </Transition>
    );
  };
}
