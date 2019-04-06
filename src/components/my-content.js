import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  Card,
  Header,
  Title,
  CardSubtitle,
  CardBody,
  CardImg,
  CardLink,
} from 'src/styled/card'
import Tags from '@/tags'
import { A, Flex, IconLink } from 'elements'

export const MyTuts = ({ edges }) =>
  edges.map((edge, index) => (
    <Card key={index} minwidth='245px'>
      <Title>{edge.node.frontmatter.title}</Title>
      <CardBody>
        <CardImg img={edge.node.frontmatter.thumbnail} height='100px' />
        <Flex hidden />
        <CardLink>
          <Link to={edge.node.frontmatter.path}>Read More...</Link>
        </CardLink>
      </CardBody>
      <Tags {...edge.node.frontmatter} />
    </Card>
  ))

MyTuts.propTypes = {
  edges: PropTypes.array,
}

export const BehanceProjects = ({ edges }) =>
  edges.map((edge, i) => (
    <Card key={i} minwidth='225px'>
      <Title>{edge.node.name}</Title>
      <CardBody>
        <CardImg img={edge.node.covers.size_max_808} />
        <CardLink>
          <Link to={`/designs/${edge.node.fields.slug}`}>See Project</Link>
        </CardLink>
      </CardBody>
      <Tags {...edge.node} />
    </Card>
  ))

BehanceProjects.propTypes = {
  edges: PropTypes.array,
}
export const PinnedRepos = ({ edges }) =>
  edges.map((edge, i) => (
    <Card key={i} minwidth='225px'>
      <Header>
        <Title>{edge.node.name}</Title>
        <IconLink href={edge.node.url}>
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
      </Header>
      <CardSubtitle>{edge.node.description}</CardSubtitle>

      <Flex>
        <A href={edge.node.homepageUrl}>homepage</A>
      </Flex>

      <CardLink />
    </Card>
  ))

PinnedRepos.propTypes = {
  edges: PropTypes.array,
}
