import React from 'react'
import uuid from 'uuid/v4'
import PostPreview from './PostPreview'
import { BlogPost } from '..'
import styled from 'styled-components'
import { media, rhythm } from '../theme'
import Card from './Card'

interface Props {
  posts: BlogPost[]
}

export const BlogPosts: React.FC<Props> = ({ posts }) => (
  <Wrapper>
    {posts.map(({ description, frontmatter }) => (
      <Card
        key={uuid()}
        {...frontmatter}
        description={description}
        fluid={frontmatter.thumbnail.childImageSharp.fluid}
      />
    ))}
  </Wrapper>
)
const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  gap: ${rhythm(1)};

  ${media.greaterThan('md')`
      grid-template-columns: repeat(2, 1fr);
    `}

  ${media.greaterThan('lg')`
      grid-template-columns: repeat(3, 1fr);
    `}
`
