import React, { Component } from 'react';
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

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0.25rem 0;
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
    const { toggle } = this.props;
    return (
      <div>
        <StyledNavbar className={show ? 'navbar' : 'navbar hidden'}>
          <Brand className="brand">
            <a href="/">glweems</a>
          </Brand>
          <Button onClick={toggle} />
        </StyledNavbar>
      </div>
    );
  };
}
