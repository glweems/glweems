import React from 'react'
import Img from 'gatsby-image'
import Card, { Cards } from './Card'
import uuid from 'uuid/v4'
import UseDesignsQuery from '../graphql/DesignsQuery'
import { Design } from '..'

interface Props {
  designs: Design[]
}

const Designs: React.FC<Props> = ({ designs }) => {
  return (
    <Cards>
      {designs.map(({ slug, name, description, cover }) => (
        <Card
          key={uuid()}
          title={name}
          description={description}
          path={`/${slug}`}
          fluid={cover.childImageSharp.fluid}
        />
      ))}
    </Cards>
  )
}

export default Designs
