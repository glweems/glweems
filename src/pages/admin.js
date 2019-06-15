/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { List } from 'elements'
import React, { Component } from 'react'
import { glweems } from 'src/data'
import styled from 'styled-components'

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
      activeMsg: {},
    }
    this.showMsg = this.showMsg.bind(this)
    this.markAsUnread = this.markAsUnread.bind(this)
    this.markAsRead = this.markAsRead.bind(this)
  }

  componentDidMount() {
    glweems
      .get(`/messages`)
      .then(({ data }) => this.setState({ messages: data }))
      .catch(err => console.log(err))
  }

  showMsg(messageId) {
    const { messages } = this.state

    const activeMsg = messages.filter(obj => obj._id === messageId)[0]
    activeMsg.read = true
    this.setState({ activeMsg })
    glweems.get(`/messages/read/${messageId}`).catch(err => console.log(err))
  }

  markAsUnread(messageId) {
    glweems.get(`/messages/unread/${messageId}`).then(res => console.log(res))
  }

  markAsRead(messageId) {
    glweems.get(`/messages/read/${messageId}`).then(res => console.log(res))
  }

  render() {
    const {
      state: { messages, activeMsg },
    } = this
    return (
      <>
        <h1>Messages</h1>
        <Messages>
          <List simple>
            {messages.map(message => (
              <MsgSmall key={message._id} unread={message.read}>
                <div onClick={() => this.showMsg(message._id)}>
                  <span>{`${message.firstname} ${message.lastname}`}</span>
                  <small>{message.createdAt}</small>
                  <small>{message.read}</small>
                </div>
                <small onClick={() => this.markAsUnread(message._id)}>
                  mark as unread
                </small>
                <small onClick={() => this.markAsRead(message._id)}>
                  mark as read
                </small>
              </MsgSmall>
            ))}
          </List>
          {activeMsg.firstname ? (
            <Message>
              <h6>
                From: {activeMsg.firstname} {activeMsg.lastname}
              </h6>
              <h6>Email: {activeMsg.email}</h6>
              <small>
                {Date(activeMsg.createdAt).replace(
                  `GMT-0400 (Eastern Daylight Time)`,
                  ``
                )}
              </small>

              <div>{activeMsg.body}</div>
            </Message>
          ) : null}
        </Messages>
      </>
    )
  }
}
