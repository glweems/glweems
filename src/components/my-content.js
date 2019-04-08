import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  Card,
  Header,
  Title,
  CardSubtitle,
  CardBody,
  CardImg,
} from 'src/styled/card'
import Tags from '@/tags'
import { Flex, Tag } from 'styled/elements'
import Link from '@/link'

export const MyTuts = ({ edges }) =>
  edges.map((edge, index) => (
    <Link to={edge.node.frontmatter.path}>
      <Card key={index} minwidth='245px'>
        <Title>{edge.node.frontmatter.title}</Title>
        <CardBody>
          <CardImg img={edge.node.frontmatter.thumbnail} height='100px' />
          <Flex hidden />
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
    <Link to={`/designs/${edge.node.fields.slug}`}>
      <Card key={i} minwidth='225px'>
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
    <Link href={edge.node.homepageUrl}>
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
    </Link>
  ))

PinnedRepos.propTypes = {
  edges: PropTypes.array,
}
