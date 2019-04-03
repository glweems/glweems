import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardLink,
} from 'src/styled/card'
import Tags from '@/tags'
import { A, Flex } from 'elements'

export const PinnedRepos = ({ edges }) =>
  edges.map((edge, i) => (
    <Card key={i} minwidth="200px">
      <CardTitle>{edge.node.name}</CardTitle>
      <div>
        <A href={edge.node.url}>
          <FontAwesomeIcon icon={faGithub} />
        </A>
      </div>
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

export const BehanceProjects = ({ edges }) =>
  edges.map((edge, i) => (
    <Card key={i} minwidth="200px">
      <CardTitle>{edge.node.name}</CardTitle>
      <Tags {...edge.node} />
      <div>
        <CardImg img={edge.node.covers.size_max_808} />
        <CardLink>
          <Link to={`/designs/${edge.node.fields.slug}`}>See Project</Link>
        </CardLink>
      </div>
    </Card>
  ))

BehanceProjects.propTypes = {
  edges: PropTypes.array,
}

export const MyTuts = ({ edges }) =>
  edges.map((edge, index) => (
    <Card key={index} minwidth="200px">
      <CardTitle>{edge.node.frontmatter.title}</CardTitle>
      {/* <CardSubtitle>{edge.node.excerpt}</CardSubtitle> */}
      <Tags {...edge.node.frontmatter} />
      <div>
        <CardImg img={edge.node.frontmatter.thumbnail} height="100px" />
        <Flex hidden />
        <CardLink>
          <Link to={edge.node.frontmatter.path}>Read More...</Link>
        </CardLink>
      </div>
    </Card>
  ))

MyTuts.propTypes = {
  edges: PropTypes.array,
}
