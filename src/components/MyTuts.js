import { Card, CardBody, CardImg, CardSubtitle, Title } from 'styled/card'
import { Flex, Tag } from 'styled/elements'

import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'

const MyTuts = ({ edges }) =>
  edges.map(({ node: { fields: { slug }, frontmatter, id, timeToRead } }) => (
    <Card minwidth='245px' key={id}>
      <Title>{frontmatter.title}</Title>
      <Link to={slug}>
        <CardImg img={frontmatter.thumbnail} height='100px' />
        <CardBody>
          <Flex between>
            <CardSubtitle>{`${timeToRead} min read`}</CardSubtitle>
            <CardSubtitle>
              {new Date(frontmatter.date).toISOString().slice(0, 10)}
            </CardSubtitle>
          </Flex>
        </CardBody>
      </Link>
      <Flex>
        {frontmatter.tags.map(tag => (
          <Tag key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </Tag>
        ))}
      </Flex>
    </Card>
  ))

MyTuts.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        timeToRead: PropTypes.number.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          tags: PropTypes.array.isRequired,
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired
  ),
}

export default MyTuts
