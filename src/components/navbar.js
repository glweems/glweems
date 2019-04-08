import React, { Component } from 'react'
import { sidebarLinks } from 'src/data'
import { Container, Flex, Button, List, LI } from 'elements'
import { Link } from 'gatsby'
import { Navbar } from 'src/styled/navbar'

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
