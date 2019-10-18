import React from 'react'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, Link } from '../components/Common'
import SEO from '../components/SEO'

interface Props {
  data: {
    allMarkdownRemark: {
      tags: { tag: string; totalCount: number }[]
    }
  }
}
const TagsPage: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { tags }
  }
}) => (
  <Container>
    <SEO config={{ title: 'tags' }} />
    <div>
      <h1>Tags</h1>
      <Grid>
        {tags.map(({ tag, totalCount }) => (
          <li key={tag}>
            <Link to={`/tags/${kebabCase(tag)}/`}>
              {tag} ({totalCount})
            </Link>
          </li>
        ))}
      </Grid>
    </div>
  </Container>
)

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

export const TagsPageQuery = graphql`
  query TagsPageQuery {
    allMarkdownRemark(limit: 2000) {
      tags: group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
