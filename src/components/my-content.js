import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Card } from '@/card'

export const PinnedRepos = ({ edges }) =>
  edges.map((edge, i) => {
    const { name, description, url, languages } = edge.node
    return (
      <Card
        key={i}
        title={name}
        subtitle={description}
        link={<a href={url}>github</a>}
        tags={languages}
      />
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
      <Card
        key={i}
        title={name}
        subtitle={description}
        img={img}
        link={<Link to={`designs/${slug}`}>View Project</Link>}
      />
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
      <Card
        key={i}
        title={title}
        subtitle={excerpt}
        img={img}
        link={<Link to={path}>Read More...</Link>}
      />
    )
  })

MyTuts.propTypes = {
  edges: PropTypes.array,
}
