import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import Tag from './Tag'

interface Props {
  items: string[]
  className?: string
  limit?: number
}
const Tags: React.FC<Props> = ({ items, className, limit }) => (
  <Wrapper className={`tags ${className}`}>
    {items.slice(0, limit || items.length).map(tag => (
      <Tag key={uuid()} tag={tag} />
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  > *:not(:last-child) {
    margin-right: 0.75em;
  }
  margin-bottom: 0.5em;
`

Tags.defaultProps = {
  limit: 4
}

export default Tags
