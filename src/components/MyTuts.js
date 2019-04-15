import { Card, CardImg, Title } from 'styled/card'
import { Flex } from 'styled/elements'

import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'
import Tags from '@/tags'

const MyTuts = ({ edges }) =>
  edges.map(({ node: { fields: { slug }, frontmatter, id, timeToRead } }) => (
    <Card minwidth='245px' key={id}>
      <Title>{frontmatter.title}</Title>
      <Link to={slug}>
        <CardImg img={frontmatter.thumbnail} height='100px' />
        <div>
          <Flex between>
            <small muted>{`${timeToRead} min read`}</small>
            <small>
              {new Date(frontmatter.date).toISOString().slice(0, 10)}
            </small>
          </Flex>
          <Flex>
            <Tags {...frontmatter} />
          </Flex>
        </div>
      </Link>
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
