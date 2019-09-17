import styled from 'styled-components';
import * as config from '../../style';

export const Header = styled.header`
  margin: 2em 0;
  .subtitle {
    margin-top: 0.5em;
    color: ${config.muted};
  }
  small {
    color: ${config.muted};
    font-style: italic;
  }
  img {
    margin-top: 1.5em;
  }
`;

export const Article = styled.article`
  display: grid;
  grid-template-columns:
    [flush-start]
    1em
    [fluid-start] minmax(0, 1fr)
    [main-start] minmax(0, 728px) [main-end]
    0 [quote-end]
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
  }


  iframe {
    grid-column: fluid;
  }
  .fluid {
    grid-column: fluid;
  }
  .flush {
    grid-column: flush;
    margin: 0;
    padding: 0;
  }

  .gatsby-highlight {
    /* grid-column: flush; */
  }

  iframe,
  img {
    border: 2px solid ${config.bg};
    border-radius: ${config.borderRadius};
  }

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
`;
