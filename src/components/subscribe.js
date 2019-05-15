import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'styled/elements'

export default class subscribe extends Component {
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
    fetch(`https://glweems-backend.herokuapp.com/api/subscribe`, {
      method: `POST`,
      mode: `no-cors`,
      headers: {
        'Access-Control-Allow-Origin': `*`,
        'content-type': `application/json`,
      },
      body: {
        email,
      },
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
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
        <Button type='submit' value='Submit'>
          hi
        </Button>
      </form>
    )
  }
}
