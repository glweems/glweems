/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Button, Form } from 'styled/elements'

export default class subscribe extends Component {
  constructor() {
    super()
    this.state = { subscribers: [], email: ``, success: ``, error: `` }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { email } = this.state
    axios
      .post(`/api/subscribe`, { email })
      .then(res =>
        res.status === 201
          ? this.setState({ success: `Subscribed!` })
          : this.setState({ error: `Whoops! Something Went Wrong` })
      )
  }

  render() {
    const { subscribers, email, success, error } = this.state
    return (
      <div>
        <span>{error}</span>
        <span>{success}</span>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Subscribe</label>
          {JSON.stringify(subscribers)}
          <input
            type='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <Button type='submit' value='Submit' style={{ color: `white` }}>
            HELLO
          </Button>
        </Form>
      </div>
    )
  }
}
