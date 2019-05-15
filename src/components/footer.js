import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Subscribe extends Component {
  constructor() {
    super()
    this.state = { email: `` }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { email } = this.state
    axios(`https://glweems-backend.herokuapp.com/api/subscribe`, {
      method: `POST`,
      mode: `no-cors`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      credentials: `same-origin`,
      body: {
        email,
      },
    })
  }

  render() {
    const { email } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>
          Name:
          <input type='text' value={email} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

const Footer = () => (
  <footer>
    <Subscribe />
  </footer>
)

export default Footer
