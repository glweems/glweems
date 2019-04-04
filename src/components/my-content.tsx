import Tags from '@/tags'
import { Flex } from 'elements'
import { Link } from 'gatsby'
import React, { ReactNode } from 'react'
import { Card, CardImg, CardLink, CardTitle } from 'styled/card'

interface Props {
  edges: object[]
  node: { name: string }
}

export default ({ edges }) =>
  edges.map((edge: object, i: int) => (
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

export const MyTuts = ({ edges }) =>
  edges.map((edge, index) => (
    <Card key={index} minwidth="200px">
      <CardTitle>{edge.node.frontmatter.title}</CardTitle>
      {/* <CardSubtitle>{edge.node.excerpt}</CardSubtitle> */}
      <Tags {...edge.node.frontmatter} />
      <div>
        <CardImg img={edge.node.frontmatter.thumbnail} height="100px" />
        <Flex hidden={true} />
        <CardLink>
          <Link to={edge.node.frontmatter.path}>Read More...</Link>
        </CardLink>
      </div>
    </Card>
  ))
