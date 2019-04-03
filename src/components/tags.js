import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Tag } from 'elements'

const Tags = ({ tags }) => (
  <Flex hidden>
    {tags.slice(0, 3).map((item, index) => (
      <Tag key={index}>{item}</Tag>
    ))}
  </Flex>
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Tags
