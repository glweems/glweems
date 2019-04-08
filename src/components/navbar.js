import React, { Component } from 'react'
import styled from 'styled-components'
import { sidebarLinks } from 'src/data'
import { Container, Flex, Button, List, LI } from 'elements'
import { Link } from 'gatsby'

const Navbar = styled.section`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  a:hover {
    text-decoration: underline;
  }
  ul {
    margin: 2rem 0;
  }
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }))
  }

  render() {
    return (
      <Navbar>
        <Container>
          <Flex between>
            <Link to='/'>glw</Link>
            <Button dark bordered onClick={this.handleClick}>
              menu
            </Button>
          </Flex>
          {this.state.isToggleOn ? (
            <List no-bullets text-right>
              {sidebarLinks.map(link => (
                <LI key={link.name}>
                  <Link to={link.to}>{link.name}</Link>
                </LI>
              ))}
            </List>
          ) : null}
        </Container>
      </Navbar>
    )
  }
}
