import React from 'react'
import styled from 'styled-components'
import { media } from '../theme'
import usePostsQuery from '../graphql/PostsQuery'
import { Frontmatter } from '..'
import PostPreview from './PostPreview'

interface Props {
  limit?: number | false
}
interface Data {
  id: string
  excerpt: string
  frontmatter: Frontmatter
}
const Grid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4em 3em;
  justify-content: space-between;
  ${media.greaterThan('sm')`
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  `};
`

const Posts = ({ limit = false }: Props) => {
  const posts = usePostsQuery()
  const amount = limit || posts.length
  return (
    <Grid columns={amount}>
      {posts.slice(0, amount).map(({ id, excerpt, frontmatter }: Data) => {
        const { path, title, date, tags } = frontmatter

        const props = { path, title, date, tags, excerpt }
        return <PostPreview key={id} {...props} fluid={frontmatter.thumbnail.childImageSharp.fluid} />
      })}
    </Grid>
  )
}

export default Posts
