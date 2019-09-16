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

  * {
    grid-column: main;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    color: ${config.text};
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
  code[class*='language-'],
  pre[class*='language-'] {
    color: #45526d;
    font-family: PT Mono, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
      monospace;
    line-height: 1.5;
    white-space: pre;
    text-align: left;
    text-shadow: none;
    word-wrap: normal;
    word-break: normal;
    word-spacing: normal;
    tab-size: 4;
    hyphens: none;
  }
  pre[class*='language-'] {
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
    background: ${config.base.light};
    border-radius: 0.3em;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    background: #b3d4fc;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    background: #b3d4fc;
  }

  :not(pre) > code[class*='language-'],
  /* pre[class*='language-'] {
  } */

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.2em;
    padding-top: 1px;
    padding-bottom: 1px;
    background: #f8f8f8;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999988;
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string,
  .token.attr-value {
    color: #e3116c;
  }
  .token.punctuation,
  .token.operator {
    color: #393a34; /* no highlight */
  }

  .token.tag,
  .token.selector,
  .language-autohotkey .token.keyword {
    color: #00009f;
  }

  .token.entity,
  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.property,
  .token.regex,
  .token.inserted {
    color: #36acaa;
  }

  .token.atrule,
  .token.attr-name,
  .language-autohotkey .token.selector {
    color: #00a4db;
  }

  .token.function,
  .token.deleted,
  .language-autohotkey .token.tag {
    color: #9a050f;
  }

  .token.important,
  .token.function,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
`;

/* .gatsby-highlight {
    grid-column: a / z;
  }

  iframe {
    grid-column: a / z;
  }
   */
