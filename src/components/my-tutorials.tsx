import Tags from '@/tags'
import { Flex } from 'elements'
import { Link } from 'gatsby'
import React, { ReactNode } from 'react'
import { Card, CardImg, CardLink, CardTitle } from 'styled/card'

interface Props {
  edges: object[]
  node: { name: string }
}

export default ({ edges }: Props) =>
  edges.map((edge, index) => (
    <Card key={index} minwidth="200px" className="card">
      <CardTitle>{edge.node.frontmatter.title}</CardTitle>
      <Tags {...edge.node.frontmatter} />
      <div>
        <CardImg img={edge.node.frontmatter.thumbnail} height="100px" />
        <Flex hidden={true} />
        <CardLink>
          <Link to={edge.node.fields.slug}>Read More...</Link>
        </CardLink>
      </div>
    </Card>
  ))
