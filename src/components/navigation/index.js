/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from '@/navigation/navbar'
import Sidebar from '@/navigation/sidebar'

export default class extends Component {
  static propTypes = {
    links: PropTypes.array,
  }

  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { isToggleOn } = this.state
    this.setState({
      isToggleOn: !isToggleOn,
    })
    console.log(`Toggle is: ${isToggleOn}`)
  }

  render() {
    const { isToggleOn } = this.state
    const { links } = this.props
    return (
      <Navbar toggle={this.handleClick} links={links} open={isToggleOn}>
        <Sidebar links={links} open={isToggleOn} />
      </Navbar>
    )
  }
}
