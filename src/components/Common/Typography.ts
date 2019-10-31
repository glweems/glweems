import styled from 'styled-components'
import { muted, primary, secondaryText } from '../../theme'

export const Title = styled.h1``
export const Subtitle = styled.h2`
  color: ${muted};
  font-weight: 500;
  font-size: 1.25em;
`
export const Blockquote = styled.blockquote`
  padding: 0.25em 0 0.25em 1em;
  color: ${muted};
  font-style: italic;
  border-left: 4px solid ${primary};
`
export const Date = styled.small`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  display: block;
  padding: 5px 10px;
  color: inherit;
  color: ${secondaryText};
  font-size: 15px;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 22px;
  text-decoration: none;
  border-radius: 3px;
`
