import React, { Component } from 'react'

import { Button } from 'elements'
import axios from 'axios'
import { darken } from 'polished'
import { media } from 'theme'
import styled from 'styled-components'

export default class subscribe extends Component {
  constructor() {
    super()
    this.state = { email: ``, success: ``, error: `` }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // axios.get(`/.netlify/functions/subscribers`).then(res => console.log(res))
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { email } = this.state
    axios
      .post(`/.netlify/functions/subscribe`, { email })
      .then(res => console.log(res))
  }

  render() {
    const { email, success, error } = this.state
    return (
      <StyledSubscribe>
        <div>
          <h2>Subscribe to our newsletter</h2>
          <span>{error}</span>
          <span>{success}</span>
        </div>
        <Form onSubmit={this.handleSubmit} className="effect-19">
          <input
            className="effect-19"
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <Button
            submit
            type="submit"
            value="Submit"
            style={{ color: `white` }}
          >
            HELLO
          </Button>
        </Form>
      </StyledSubscribe>
    )
  }
}
const StyledSubscribe = styled.section`
  width: 100%;
  background: ${props => darken(0.1, props.theme.bg)};

  display: grid;
  grid-template-columns: 1fr 1fr;
  ${media.tablet`grid-template-columns: 1fr;`}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1rem;
  }

  label {
    text-align: left;
  }
`
