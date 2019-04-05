import React from 'react'
import { Flex, Tag } from 'elements'

const Tags = ({ tags }) => (
  <Flex hidden>
    {tags.slice(0, 3).map((item, index) => (
      <Tag key={index}>{item}</Tag>
    ))}
  </Flex>
)

export default Tags
