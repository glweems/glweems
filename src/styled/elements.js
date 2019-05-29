import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'
import { media } from 'theme'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
  }

  input,
  textarea {
    margin-bottom: 0.75rem;
    border-radius: 3px;
    border-color: transparent;
    padding-left: 0.5rem;
  }

  [submit],
  button {
    background: ${props => props.theme.green};
  }
`

export const Container = styled.div`
  max-width: ${992 / 16}em;
  margin: 0 auto;
  ${media.phone`width: 100%;`};
`

export const Tag = styled.span`
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${props => props.theme.blue};
  display: inline-block;
  font-size: 12px;
  height: 10px;
  line-height: 0;
  min-width: auto;
  outline: none;
  overflow: hidden;
  padding: 6px 4px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  background: ${props => props.theme.blue};
  color: ${props => props.theme.light};
  :hover {
    background: none;
    color: ${props => props.theme.blue};
    border-color: ${props => props.theme.blue};
  }
`

export const Button = styled.button`
  background: none;
  /* border-color: ${props => props.theme.text}; */
  color: ${props => props.theme.text};
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.145px;
  margin: 0;
  padding: 5px 15px;
  border-radius: 3px;
  /* border-style: solid;
  border-width: 2px; */
  font-size: 17px;
  font-weight: bold;
  ${props =>
    props.bordered &&
    css`
      border-radius: 3px;
      border-style: solid;
      border-width: 2px;
    `}

  ${props =>
    props.submit &&
    css`
      border-color: ${props => darken(0.1, props.theme.green)};
      background: ${props => props.theme.green};
    `};

  ${props =>
    props.blue &&
    css`
      background: ${props => props.theme.blue};
    `};
  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `};
`

export const Flex = styled.div`
  display: flex;
  align-items: ${props => (props.alignCenter ? `center` : null)};
  height: ${props => (props.h100 ? `100%` : null)};
  ${props =>
    props.w100 &&
    css`
      width: 100%;
    `};
  ${props =>
    props.column &&
    css`
      flex-direction: column;
    `};
  ${props =>
    props.between &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.evenly &&
    css`
      justify-content: space-evenly;
    `};
  ${props =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `};
  overflow: ${props => (props.scroll ? `auto` : `hidden`)};
  -webkit-overflow-scrolling: touch;

  ${Tag}:not(last-child) {
    margin-right: 0.5rem;
  }
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
li {
  margin: 0;
  padding: 0;
}
  ${props =>
    props.simple &&
    css`
      margin: 0;
      list-style: none;
    `}

    text-align: ${props => (props.textRight ? `right` : `left`)}
`

export const IconLink = styled.a`
  color: ${props => props.theme.dark}!important;
  :hover {
    color: ${props => props.theme.blue}!important;
  }
`

export const LI = styled.li`
  margin: 0;
`

export const Article = styled.article`
  img {
    width: 100%;
    margin: 0 auto;
  }
  ${props =>
    props.theme.mode === `dark` &&
    css`
      code[class*='language-'],
      pre[class*='language-'] {
        color: #c5c8c6;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier,
          monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }

      pre[class*='language-'] {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
        border-radius: 0.3em;
      }

      :not(pre) > code[class*='language-'],
      pre[class*='language-'] {
        background: ${props => lighten(0.025, props.theme.bg)};
      }

      :not(pre) > code[class*='language-'] {
        padding: 0.1em;
        border-radius: 0.3em;
      }

      .token.comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: #7c7c7c;
      }

      .token.punctuation {
        color: #c5c8c6;
      }

      .namespace {
        opacity: 0.7;
      }

      .token.property,
      .token.keyword,
      .token.tag {
        color: #96cbfe;
      }

      .token.class-name {
        color: #ffffb6;
        text-decoration: underline;
      }

      .token.boolean,
      .token.constant {
        color: #99cc99;
      }

      .token.symbol,
      .token.deleted {
        color: #f92672;
      }

      .token.number {
        color: #ff73fd;
      }

      .token.selector,
      .token.attr-name,
      .token.string,
      .token.char,
      .token.builtin,
      .token.inserted {
        color: #a8ff60;
      }

      .token.variable {
        color: #c6c5fe;
      }

      .token.operator {
        color: #ededed;
      }

      .token.entity {
        color: #ffffb6;
        /* text-decoration: underline; */
      }

      .token.url {
        color: #96cbfe;
      }

      .language-css .token.string,
      .style .token.string {
        color: #87c38a;
      }

      .token.atrule,
      .token.attr-value {
        color: #f9ee98;
      }

      .token.function {
        color: #dad085;
      }

      .token.regex {
        color: #e9c062;
      }

      .token.important {
        color: #fd971f;
      }

      .token.important,
      .token.bold {
        font-weight: bold;
      }
      .token.italic {
        font-style: italic;
      }

      .token.entity {
        cursor: help;
      }
    `}

  ${props =>
    props.theme.mode === `light` &&
    css`
      code[class*='language-'],
      pre[class*='language-'] {
        font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
          'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
          'Courier New', Courier, monospace;
        font-size: 14px;
        line-height: 1.375;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
        background: ${props => darken(0.025, props.theme.bg)};
        color: #728fcb;
      }

      pre[class*='language-']::-moz-selection,
      pre[class*='language-'] ::-moz-selection,
      code[class*='language-']::-moz-selection,
      code[class*='language-'] ::-moz-selection {
        text-shadow: none;
        background: #faf8f5;
      }

      pre[class*='language-']::selection,
      pre[class*='language-'] ::selection,
      code[class*='language-']::selection,
      code[class*='language-'] ::selection {
        text-shadow: none;
        background: #faf8f5;
      }

      pre[class*='language-'] {
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
      }

      :not(pre) > code[class*='language-'] {
        padding: 0.1em;
        border-radius: 0.3em;
      }

      .token.comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: #b6ad9a;
      }

      .token.punctuation {
        color: #b6ad9a;
      }

      .token.namespace {
        opacity: 0.7;
      }

      .token.tag,
      .token.operator,
      .token.number {
        color: #063289;
      }

      .token.property,
      .token.function {
        color: #b29762;
      }

      .token.tag-id,
      .token.selector,
      .token.atrule-id {
        color: #2d2006;
      }

      code.language-javascript,
      .token.attr-name {
        color: #896724;
      }

      code.language-css,
      code.language-scss,
      .token.boolean,
      .token.string,
      .token.entity,
      .token.url,
      .language-css .token.string,
      .language-scss .token.string,
      .style .token.string,
      .token.attr-value,
      .token.keyword,
      .token.control,
      .token.directive,
      .token.unit,
      .token.statement,
      .token.regex,
      .token.atrule {
        color: #728fcb;
      }

      .token.placeholder,
      .token.variable {
        color: #93abdc;
      }

      .token.deleted {
        text-decoration: line-through;
      }

      .token.inserted {
        border-bottom: 1px dotted #2d2006;
        text-decoration: none;
      }

      .token.italic {
        font-style: italic;
      }

      .token.important,
      .token.bold {
        font-weight: bold;
      }

      .token.important {
        color: #896724;
      }

      .token.entity {
        cursor: help;
      }

      pre > code.highlight {
        outline: 0.4em solid #896724;
        outline-offset: 0.4em;
      }

      .line-numbers .line-numbers-rows {
        border-right-color: #ece8de;
      }

      .line-numbers-rows > span:before {
        color: #cdc4b1;
      }

      .line-highlight {
        background: rgba(45, 32, 6, 0.2);
        background: -webkit-linear-gradient(
          left,
          rgba(45, 32, 6, 0.2) 70%,
          rgba(45, 32, 6, 0)
        );
        background: linear-gradient(
          to right,
          rgba(45, 32, 6, 0.2) 70%,
          rgba(45, 32, 6, 0)
        );
      }
    `}
`
