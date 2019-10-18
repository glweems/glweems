import React from 'react'
import styled from 'styled-components'
import { Tag } from './Common'

const StyledTags = styled.div`
  display: flex;
  > *:not(:last-child) {
    margin-right: 0.75em;
  }
  margin-bottom: 0.5em;
`

const Tags = ({ items, className }: { items: string[]; className?: string }) => (
  <StyledTags className={`hashtags ${className}`}>
    {items.slice(0, 3).map(item => (
      <Tag key={item} to={`tags/${item.toLocaleLowerCase()}`} className="hashtag">
        {item.toLocaleLowerCase()}
      </Tag>
    ))}
  </StyledTags>
)

export default Tags
