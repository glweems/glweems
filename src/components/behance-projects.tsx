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
    <Card light key={i} minwidth="250px" className="card">
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
