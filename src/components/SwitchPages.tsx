import * as React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { Button } from './Common'
import { primary, bg, darkPrimary } from '../theme'

type StrOrNull = string | null
interface DirectionButton {
  path: StrOrNull
  direction: 'prev' | 'next'
}

const DirectionButton = styled(Button)`
  color: ${bg};
  background: ${primary};
  border-color: ${darkPrimary};
`

const PageButton = ({ path, direction }: DirectionButton) => {
  const action = () => !path || navigate(path)
  const clickable = path === null
  return (
    <DirectionButton type="button" disabled={clickable} onClick={action}>
      {direction}
    </DirectionButton>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
interface SwitchPagesProps {
  prev: StrOrNull
  next: StrOrNull
}

const SwitchPages = ({ prev, next }: SwitchPagesProps) => (
  <Wrapper>
    <PageButton direction="prev" path={prev} />
    <PageButton direction="next" path={next} />
  </Wrapper>
)

export default SwitchPages
