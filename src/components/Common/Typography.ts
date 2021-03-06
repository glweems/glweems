import styled from 'styled-components'

export const Title = styled.h1``
export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 500;
  font-size: 1.25em;
`
export const Blockquote = styled.blockquote`
  padding: 0.25em 0 0.25em 1em;
  color: ${({ theme }) => theme.colors.muted};
  font-style: italic;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`
