import { Card, CardImg, CardSubtitle, Header, Title } from 'styled/card'
import { Flex, Tag } from 'styled/elements'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'
import Tags from '@/tags'
import { ellipsis } from 'polished'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const BehanceProjects = ({ edges }) =>
  edges.map(({ node: { fields: { slug }, name, covers, tags, id } }) => (
    <Card minwidth='225px' key={id}>
      <Link to={`/designs/${slug}`}>
        <Title>{name}</Title>
        <CardImg img={covers.size_max_808} />
        <Tags tags={tags} hashtag />
      </Link>
    </Card>
  ))

BehanceProjects.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        covers: PropTypes.shape({
          size_max_808: PropTypes.string.isRequired,
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
        tags: PropTypes.array.isRequired,
      }),
    }).isRequired
  ),
}
export const PinnedRepos = ({ edges }) =>
  edges.map(({ node: { name, url, description, languages } }, i) => (
    <Card key={i} minwidth='225px'>
      <Header>
        <Title light>{name}</Title>
        <Link href={url} target='_'>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Header>
      <CardSubtitle style={ellipsis(225)}>{description}</CardSubtitle>
      <Flex scroll>
        {languages.edges.map(({ node: { name: lang, color, id } }) => (
          <Tag key={id} color={color}>
            {lang}
          </Tag>
        ))}
      </Flex>
    </Card>
  ))

PinnedRepos.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        languages: PropTypes.shape({
          node: PropTypes.shape({
            edges: PropTypes.arrayOf({
              name: PropTypes.string.isRequired,
              color: PropTypes.string.isRequired,
            }),
          }),
        }),
      }),
    }).isRequired
  ),
}
