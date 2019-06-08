import { Button, Form } from 'elements'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { glweems } from 'src/data'

export default class AddComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: '',
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()

    const { comment } = this.state
    const { url, post } = this.props

    glweems
      .post(url, { tutorial: post, comment })
      .then(() => this.setState({ comment: '' }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
        <h3>Let us know what you think</h3>
        <Form onSubmit={this.handleSubmit}>
          <textarea type="text" name="comment" onChange={this.handleChange} />
          <Button>Add Comment</Button>
        </Form>
      </section>
    )
  }
}

AddComment.propTypes = {
  url: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
}
