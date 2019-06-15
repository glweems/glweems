import { Flex, Tag } from 'elements'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Tags = ({ tags }) => (
  <Flex wrap="true">
    {tags.slice(0, 2).map((item, index) => (
      <Tag key={index}>
        <Link to={`tags/${item}`}>{item}</Link>
      </Tag>
    ))}
  </Flex>
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Tags
