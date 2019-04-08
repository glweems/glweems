import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  Header,
  Title,
} from 'src/styled/card'
import { Flex, Tag } from 'styled/elements'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '@/link'
import PropTypes from 'prop-types'
import React from 'react'
import Tags from '@/tags'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const MyTuts = ({ edges }) =>
  edges.map((edge, i) => (
    <Link to={edge.node.frontmatter.path} key={i}>
      <Card minwidth='245px'>
        <Title>{edge.node.frontmatter.title}</Title>
        <CardBody>
          <CardImg img={edge.node.frontmatter.thumbnail} height='100px' />
          <CardSubtitle>{`${edge.node.timeToRead} min read`}</CardSubtitle>
        </CardBody>
        <Tags {...edge.node.frontmatter} hashtag />
      </Card>
    </Link>
  ))

MyTuts.propTypes = {
  edges: PropTypes.array,
}

export const BehanceProjects = ({ edges }) =>
  edges.map((edge, i) => (
    <Link to={`/designs/${edge.node.fields.slug}`} key={i}>
      <Card minwidth='225px'>
        <Title>{edge.node.name}</Title>
        <CardBody>
          <CardImg img={edge.node.covers.size_max_808} />
        </CardBody>
        <Tags {...edge.node} hashtag />
      </Card>
    </Link>
  ))

BehanceProjects.propTypes = {
  edges: PropTypes.array,
}
export const PinnedRepos = ({ edges }) =>
  edges.map((edge, i) => (
    <Card key={i} minwidth='225px'>
      <Header>
        <Title>{edge.node.name}</Title>
        <Link href={edge.node.url} target='_'>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Header>
      <CardSubtitle>{edge.node.description}</CardSubtitle>
      <Flex scroll>
        {edge.node.languages.edges.map((lang, i) => (
          <Tag key={i} color={lang.node.color}>
            {lang.node.name}
          </Tag>
        ))}
      </Flex>
    </Card>
  ))

PinnedRepos.propTypes = {
  edges: PropTypes.array,
}
