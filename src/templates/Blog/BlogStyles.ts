import styled from 'styled-components'
import { rhythm, media, muted, text, bg, primary, base, borderRadius } from '../../theme'

export const Header = styled.header`
  padding: 4em 0;
`

export const StyledInfo = styled.small`
  color: ${muted};
  font-weight: bold;
  font-style: italic;
`

export const Article = styled.article`
  /* display: grid;
  grid-template-rows: 1fr;
  grid-template-columns:
    [flush-start] minmax(1em, 1fr)
    [main-start] minmax(auto, 728px) [main-end]
    minmax(1em, 1fr) [flush-end]; */
  width: 720px;
  max-width: calc(100vw - 1em);
  margin: 0 auto;
  color: ${text};
  background: ${bg};
  .thumbnail {
    max-height: 30vh;
  }
  pre,
  iframe,
  .thumbnail {
    margin-bottom: ${rhythm(2)};
  }
  ${media.greaterThan('sm')`
  padding: 0;
    img,
    iframe {
      border: 2px solid ${bg};
      border-radius: ${borderRadius};
    }
  `};

  blockquote {
    width: 100%;
    margin: 0 0 ${rhythm(2)} 0;
    padding: 0.25em 0 0.25em 1em;
    border-left: 4px solid ${primary};

    ${media.greaterThan('sm')`
      margin-left: -1em;
    `};
  }

  #disqus_thread {
    background: ${base.light};
    border-radius: 0;

    ${media.greaterThan('sm')`
      border-radius: ${borderRadius};
    `};
  }
`
