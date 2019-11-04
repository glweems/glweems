import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import uuid from 'uuid/v4'
import { Tag } from './Common'

const StyledTags = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
  > *:not(:last-child) {
    margin-right: 0.75em;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
interface Props {
  items: string[]
  className?: string
  limit?: number
}
const Tags: React.FC<Props> = ({ items, className, limit }) => (
  <StyledTags className={`tags ${className}`}>
    {items.slice(0, limit || items.length).map(item => (
      <Tag key={uuid()} to={`/tags/${_.kebabCase(item)}`}>
        {item.toLocaleLowerCase()}
      </Tag>
    ))}
  </StyledTags>
)

Tags.defaultProps = {
  limit: 4
}

export default Tags
