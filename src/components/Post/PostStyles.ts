import styled from 'styled-components';
import * as config from '../../style';

export const Header = styled.header`
  margin-top: -2em;
  padding: 4em 1em;
  padding-bottom: 10em;
  background: ${config.text};
  background-clip: 1em;
  .title {
    font-weight: bold;
  }
  .subtitle {
    margin-top: 0.75em;
    color: ${config.muted} !important;
    font-weight: light;
  }
  div {
    margin-top: 0.5em !important;
  }
`;
export const StyledInfo = styled.small`
  color: ${config.muted};
  font-style: italic;
`;

export const Article = styled.article`
  display: grid;
  grid-template-columns:
    [flush-start]
    1em
    [fluid-start] minmax(0, 1fr)
    [larger-start] minmax(0, 0.5fr)
    [main-start] minmax(0, 728px) [main-end]
    0 [quote-end]
    minmax(0, 0.5fr) [larger-end]
    minmax(0, 1fr) [fluid-end]
    1em [flush-end];
  gap: 3em 0;
  width: 100%;
  color: ${config.text};
  background: ${config.bg};

  * {
    grid-column: main;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;

    ${config.media.greaterThan('sm')`
      grid-column: main;
    `};
  }
  ${Header} {
    grid-column: flush;
    & > * {
      max-width: 720px;
      margin: 0 auto;
    }
  }

  .gatsby-highlight {
    grid-column: flush;
    ${config.media.greaterThan('sm')`
      grid-column: larger;
    `};
  }

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

  .thumbnail {
    grid-column: flush;
    max-height: 35vh;
    margin-top: -10em;
    ${config.media.greaterThan('sm')`
      grid-column: larger;
  `};
  }

  ${config.media.greaterThan('sm')`
    iframe,
    img {
      border: 2px solid ${config.bg};
      border-radius: ${config.borderRadius};
    }
  `};

  blockquote {
    width: 100%;
    padding-left: 1em;
    color: ${config.text};
    font-style: italic;
    border-color: ${config.primary};
    p {
      color: ${config.muted} !important;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${config.primary};
  }
  .comments {
    grid-column: flush;
    width: 100% !important;
  }

  .codepen-embed-body,
  #the-body {
    padding: 5em;
    background: #3d3d3e;
    border: none;
  }

  #disqus_thread {
    grid-column: larger;
    /* grid-column: larger !important; */
    width: 100% !important;
    background: ${config.base.dark};
  }
`;
