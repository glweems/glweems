import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardLink,
} from 'src/styled/card'
import { Flex } from 'elements'

export const PinnedRepos = ({ edges }) =>
  edges.map((edge, i) => (
    <Card key={i} minwidth="200px">
      <CardTitle>{edge.node.name}</CardTitle>
      <CardSubtitle>{edge.node.description}</CardSubtitle>
      <CardLink>
        <Flex>
          <a href={edge.node.url}>github</a>
          <a href={edge.node.homepageUrl}>homepage</a>
        </Flex>
      </CardLink>
    </Card>
  ))

PinnedRepos.propTypes = {
  edges: PropTypes.array,
}

export const BehanceProjects = ({ edges }) =>
  edges.map((edge, i) => (
    <Card key={i} minwidth="200px">
      <CardTitle>{edge.node.name}</CardTitle>
      <CardImg img={edge.node.covers.size_max_808} />
      <CardLink>
        <Link to={`/designs/${edge.node.fields.slug}`}>See Project</Link>
      </CardLink>
    </Card>
  ))

BehanceProjects.propTypes = {
  edges: PropTypes.array,
}

export const MyTuts = ({ edges }) =>
  edges.map((edge, i) => (
    <Card key={i} minwidth="200px">
      <CardTitle>{edge.node.frontmatter.title}</CardTitle>
      <CardSubtitle>{edge.node.excerpt}</CardSubtitle>
      <CardImg img={edge.node.frontmatter.thumbnail} />
      <CardLink>
        <Link to={edge.node.frontmatter.path}>Read More...</Link>
      </CardLink>
    </Card>
  ))

MyTuts.propTypes = {
  edges: PropTypes.array,
}
