/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events) */
import React, { Component } from 'react'
import Layout from '@/containers/layout'
import { glweems } from 'src/data'
import styled from 'styled-components'
import { Button, Container, List } from 'elements'

const Messages = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0.5rem;
  padding: 1rem;
  ${List} {
    max-height: 1000px;
    overflow: scroll;
    background: ${props => props.theme.light};
    color: ${props => props.theme.dark};
    border-radius: 3px;
    li {
      padding: 0.5rem;
      border-bottom: 1px solid ${props => props.theme.dark};
    }
  }
`

const MsgSmall = styled.li`
  display: flex;
  flex-direction: column;

  background: ${props =>
    !props.unread ? props.theme.blue : props.theme.light};
`

const Message = styled.div``

export default class admin extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      activeMessage: {},
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { messages } = this.state
    glweems
      .get(`/messages`)
      .then(({ data }) => this.setState({ messages: data }))
      .catch(err => console.log(err))
  }

  handleClick(messageId) {
    glweems
      .get(`/messages/${messageId}`)
      .then(({ data }) => this.setState({ activeMessage: data }))
      .catch(err => console.log(err))
  }

  render() {
    const {
      state: { messages, activeMessage },
    } = this
    return (
      <Layout>
        <Container>
          <h1>Messages</h1>
          <Messages>
            <List simple>
              {messages.map(message => (
                <MsgSmall
                  key={message._id}
                  unread={message.read}
                  onClick={() => this.handleClick(message._id)}>
                  <span>{`${message.firstname} ${message.lastname}`}</span>
                  <small>{message.createdAt}</small>
                  <small>{message.read}</small>
                </MsgSmall>
              ))}
            </List>
            {activeMessage.firstname ? (
              <Message>
                <h6>
                  From: {activeMessage.firstname} {activeMessage.lastname}
                </h6>
                <h6>Email: {activeMessage.email}</h6>
                <small>
                  {Date(activeMessage.createdAt).replace(
                    `GMT-0400 (Eastern Daylight Time)`,
                    ``
                  )}
                </small>
                <br />
                <div>{activeMessage.body}</div>
              </Message>
            ) : null}
          </Messages>
        </Container>
      </Layout>
    )
  }
}
