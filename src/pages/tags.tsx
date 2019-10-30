import * as React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Common'
import SEO from '../components/SEO'
import { TagBar } from '../components/TagBar'
import { remainingHeight, Main } from '../theme'

interface Props {
  data: {
    allMarkdownRemark: {
      tags: { tag: string; totalCount: number }[]
    }
  }
}

const TagsPage: React.FC<Props> = () => {
  return (
    <>
      <SEO config={{ title: 'tags' }} />
      <TagBar />
      <Container className="content"></Container>
    </>
  )
}

export const TagsMain = styled(Main)`
  display: grid;
  grid-template-areas: 'tagbar content' 'tagbar footer';
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 250px 1fr;
  height: 100%;
  max-height: ${remainingHeight};
  overflow: auto;

  .tagbar {
    position: sticky;
    top: 0;
    left: 0;
    grid-area: tagbar;
  }

  .content {
    grid-area: content;
  }

  footer {
    grid-area: footer;
    align-self: flex-end;
  }
`

export default TagsPage
