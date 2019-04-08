import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Tag } from 'elements'

const Tags = props => (
  <Flex wrap='true'>
    {props.tags.slice(0, 2).map((item, index) => (
      <Tag key={index} {...props}>
        {item}
      </Tag>
    ))}
  </Flex>
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Tags
