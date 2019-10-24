import React from 'react'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import styled from 'styled-components'
import uuid from 'uuid/v4'
import { Container, Link } from '../components/Common'
import SEO from '../components/SEO'
import useSiteTags from '../graphql/useAllSiteTags'

interface Props {
  data: {
    allMarkdownRemark: {
      tags: { tag: string; totalCount: number }[]
    }
  }
}
const TagsPage: React.FC<Props> = () => {
  const { tags, qty } = useSiteTags()
  return (
    <Container>
      <SEO config={{ title: 'tags' }} />
      <div>
        <h1>{qty} - Tags</h1>
        <Grid>
          {tags.map((item: { tag: string; qty: number }) => (
            <li key={uuid()}>
              <Link to={`/tags/${kebabCase(item.tag)}/`}>
                {item.tag} ({item.qty})
              </Link>
            </li>
          ))}
        </Grid>
      </div>
    </Container>
  )
}

const Grid = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  justify-items: flex-start;
`

export default TagsPage
