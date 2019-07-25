import React, { Component } from 'react'
import { List } from 'elements'
import PropTypes from 'prop-types'
import { glweems } from 'src/data'
import styled from 'styled-components'

const Comment = styled.li`
  background: ${props => props.theme.light};
  color: ${props => props.theme.dark};
  padding: 0.5rem !important;
  margin-bottom: 1rem !important;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  span:last-child {
    font-size: 0.75rem;
  }
`

export default class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
    }
  }

  componentDidMount = () => {
    const { url } = this.props
    glweems
      .get(url)
      .then(({ data }) => this.setState({ comments: data }))
      .catch(err => console.log(err))
  }

  render() {
    const { comments } = this.state

    return (
      <section>
        <h3>Comments</h3>
        <List simple>
          {comments.map((comment, i) => (
            <Comment key={i}>
              <span>{comment.comment}</span>
              <span>{comment.createdAt}</span>
            </Comment>
          ))}
        </List>
      </section>
    )
  }
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
}
