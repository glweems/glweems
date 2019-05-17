/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button } from 'styled/elements'

export default class ContactForm extends Component {
  constructor() {
    super()
    this.state = { name: null, email: null, body: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { name, email, body } = this.state

    name !== null && email !== null && body !== null
      ? axios
          .post(`/api/messages/new`, { name, email, body })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      : console.log(`not ready`)
  }

  render() {
    const { name, email, body } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Subscribe</label>
          <input
            name='name'
            type='text'
            value={name}
            onChange={this.handleChange}
            placeholder='Name'
          />
          <input
            name='email'
            type='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <input
            name='body'
            type='text'
            value={body}
            onChange={this.handleChange}
            placeholder='Message'
          />
          <Button type='submit' value='Submit' style={{ color: `white` }}>
            HELLO
          </Button>
        </Form>
      </div>
    )
  }
}
