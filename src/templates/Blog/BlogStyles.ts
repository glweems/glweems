import styled from 'styled-components';
import {
  rhythm,
  media,
  muted,
  text,
  bg,
  primary,
  base,
  borderRadius,
} from '../../theme';

export const Header = styled.header`
  padding: 4em 0;
`;

export const StyledInfo = styled.small`
  color: ${muted};
  font-weight: bold;
  font-style: italic;
`;

export const Article = styled.article`
  display: grid;
  grid-template-columns:
    [flush-start] 1em
    [fluid-start] minmax(0, 1fr)
    [larger-start] minmax(0, 0.5fr)
    [main-start] minmax(0, 728px) [main-end]
    minmax(0, 0.5fr) [larger-end]
    minmax(0, 1fr) [fluid-end]
    1em [flush-end];

  width: 100%;
  color: ${text};
  background: ${bg};

  & > * {
    grid-column: main;
    max-width: 100%;
    margin: 0 0 ${rhythm(2)} 0;
    overflow-x: auto;
    overflow-y: hidden;

    ${media.greaterThan('sm')`
      grid-column: main;
    `};
  }

  ${media.greaterThan('sm')`
    img,
    iframe {
      border: 2px solid ${bg};
      border-radius: ${borderRadius};
    }
  `};

  iframe {
    grid-column: larger;
  }

  .fluid {
    grid-column: fluid;
  }
  .flush {
    grid-column: flush;
    margin: 0;
    padding: 0;
  }
  .larger {
    grid-column: larger;
  }

  .cp_embed_wrapper {
    grid-column: larger;
  }

  .thumbnail {
    grid-column: flush;
    max-height: 35vh;
    ${media.greaterThan('sm')`
      grid-column: larger;
  `};
  }

  blockquote {
    width: 100%;
    margin: 0 0 ${rhythm(2)} -1em;
    padding: 0.25em 0 0.25em 1em;
    border-left: 4px solid ${primary};

    ${media.greaterThan('sm')`
      margin-left: -1em;
    `};
  }

  #disqus_thread {
    background: ${base.dark};
    border-radius: 0;

    ${media.greaterThan('sm')`
      border-radius: ${borderRadius};
    `};
  }

  ${media.lessThan('sm')`
    #disqus_thread,
    blockquote,
    iframe,
    pre {
      grid-column: flush;
    }
  `};
`;
