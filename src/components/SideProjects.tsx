import React from 'react'
import { Link } from './Common'
import Card, { Cards } from './Card'
import useSideProjectsQuery from '../graphql/SideProjectsQuery'
import uuid from 'uuid/v4'

interface Props {
  limit?: number | false
}

const Websites = ({ limit = false }: Props) => {
  const websites = useSideProjectsQuery()

  return (
    <Cards>
      {websites.slice(0, limit || websites.length).map(({ id, title, description, tags, link, image }) => (
        <Card
          key={uuid()}
          title={title}
          description={description}
          tags={tags}
          path={link}
          fluid={image.childImageSharp.fluid}
        >
          <Link to={link}>View Site</Link>
        </Card>
      ))}
    </Cards>
  )
}

export default Websites
