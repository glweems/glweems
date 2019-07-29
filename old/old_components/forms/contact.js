import { Button, Form } from 'elements';
import React, { Component, Fragment } from 'react';
import { glweems } from 'src/data';
import { lighten } from 'polished';
import styled from 'styled-components';

const Notification = styled.div`
  color: ${props => props.theme.dark};
  background: ${props => lighten(0.15, props.theme.red)};
  padding: 0.25rem 0.75rem;
  border-radius: 3px;
`;

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: ``,
      lastname: ``,
      company: ``,
      email: ``,
      body: ``,
      errors: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, company, email, body } = this.state;
    const errors = [];

    if (!firstname || !lastname || !email || !body) {
      errors.push(`Please Fill out all required forms`);
      console.log(process.env.NODE_ENV);
      this.setState({ errors });
    } else {
      glweems
        .post(`/messages`, {
          firstname,
          lastname,
          company,
          email,
          body,
        })
        .then(res => {
          this.setState({
            firstname: ``,
            lastname: ``,
            company: ``,
            email: ``,
            body: ``,
          });
        });
    }
  }

  render() {
    const { firstname, lastname, company, email, body, errors } = this.state;
    return (
      <Fragment>
        {errors.length !== 0
          ? errors.map((error, i) => <Notification key={i}>{error}</Notification>)
          : null}
        <Form onSubmit={this.handleSubmit}>
          <input
            name="firstname"
            type="text"
            value={firstname}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <input
            name="lastname"
            type="text"
            value={lastname}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <input
            name="company"
            type="text"
            value={company}
            onChange={this.handleChange}
            placeholder="Company"
          />
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <textarea
            rows="4"
            cols="50"
            name="body"
            type="text"
            value={body}
            onChange={this.handleChange}
            placeholder="Message"
          />
          <Button type="submit" value="Submit" style={{ color: `white` }}>
            HELLO
          </Button>
        </Form>
      </Fragment>
    );
  }
}
