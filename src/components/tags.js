import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Tag } from 'elements'

const Tags = ({ tags }) => (
  <Flex hidden>
    {tags.slice(0, 3).map(tag => (
      <Tag>{tag}</Tag>
    ))}
  </Flex>
)

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default Tags
