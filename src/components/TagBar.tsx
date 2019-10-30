import React from 'react'
import uuid from 'uuid/v4'
import _ from 'lodash'
import { List, Tag, Container, Divider } from './Common'
import styled from 'styled-components'
import { remainingHeight, secondaryTheme, rhythm } from '../theme'
import useSiteTags from '../hooks/useSiteTags'

interface Tag {
  tag: string
  qty: number
}

const Wrapper = styled.div`
  height: 100%;
  max-height: ${remainingHeight};
  padding: ${rhythm(2)} 0;
  overflow: auto;
  ${secondaryTheme};
  h2 {
    margin-bottom: 0;
  }
`

export const TagBar: React.FC<{}> = () => {
  const { tags, qty } = useSiteTags()
  return (
    <Wrapper className="tagbar">
      <Container>
        <h2>{qty} tags</h2>
        <Divider />
        <List listStyleNone>
          {tags.map(({ tag, qty }: Tag) => (
            <Tag key={uuid()} to={`/tags/${_.kebabCase(tag)}/`}>
              {tag} ({qty})
            </Tag>
          ))}
        </List>
      </Container>
    </Wrapper>
  )
}
