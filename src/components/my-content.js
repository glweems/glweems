import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  ImgDiv,
  CardLink,
} from '@/card'
import Theme from 'src/Theme'
import styled, { css } from 'styled-components'

export const PinnedRepos = ({ edges }) =>
  edges.map((edge, i) => {
    const { name, description, url, languages } = edge.node
    return (
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{description}</CardSubtitle>
        <CardLink>
          <a href={url}>github</a>
        </CardLink>
      </Card>
    )
  })

PinnedRepos.propTypes = {
  edges: PropTypes.array,
}

export const BehanceProjects = ({ edges }) =>
  edges.map((edge, i) => {
    const {
      name,
      description,
      fields: { slug },
      covers: { size_808: img },
    } = edge.node
    return (
      <Card key={i} imgTop>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{description}</CardSubtitle>
        <CardLink>
          <Link to={`/designs/${slug}`}>See Project</Link>
        </CardLink>
        <ImgDiv style={{ backgroundImage: `url(${img})` }} />
      </Card>
    )
  })

BehanceProjects.propTypes = {
  edges: PropTypes.array,
}

export const MyTuts = ({ edges }) =>
  edges.map((edge, i) => {
    const {
      excerpt,
      frontmatter: { path, title, thumbnail: img, tags },
    } = edge.node
    return (
      <Card key={i} imgTop>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{excerpt}</CardSubtitle>
        <CardLink>
          <Link to={path}>Read More...</Link>
        </CardLink>
        <ImgDiv style={{ backgroundImage: `url(${img})` }} />
      </Card>
    )
  })

MyTuts.propTypes = {
  edges: PropTypes.array,
}
