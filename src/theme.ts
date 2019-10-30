import theme from 'styled-theming'
import styled, { createGlobalStyle, css } from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { darken, lighten } from 'polished'
import { rhythm } from './utils/typography'

export { rhythm, scale, options } from './utils/typography'

export const base = { light: `#f7f7f7`, dark: `#0f121b` }
export const blue = '#1769ff'
export const green = '#4caf50'
export const mint = '#a7e3cc'
export const purple = '#d0c1fa'
export const red = `#d65947`
export const darkRed = darken(0.1, red)
export const yellow = '#f8d58c'
export const darkYellow = darken(0.1, yellow)
export const primary = theme('mode', { light: red, dark: yellow })
export const darkPrimary = theme('mode', { light: darkRed, dark: darkYellow })
export const muted = theme('mode', { light: '#5a5a5a', dark: '#c6c7c6' })
export const text = theme('mode', { light: '#252d3d', dark: '#f7f7f7' })
export const bg = theme('mode', { light: '#fff', dark: '#0f121b' })
export const rootBg = theme('mode', { light: '#f8f8f8', dark: '#181D2B' })
export const borderColor = theme('mode', {
  light: '#c6c7c6',
  dark: '#1b2027'
})

export const secondaryText = theme('mode', { light: 'rgba(0, 0, 0, 0.54)', dark: 'rgba(255, 255, 255, 0.54)' })
export const secondaryBg = theme('mode', { light: 'rgba(0, 0, 0, 0.05)', dark: 'rgba(255, 255, 255, 0.05)' })

export const secondaryTheme = css`
  color: ${secondaryText};
  background: ${secondaryBg};
`

export const tagBg = theme('mode', { light: 'rgba(37, 45, 61, 30)', dark: 'rgba(248, 248, 248, 10)' })
export const tagColor = theme('mode', { light: base.light, dark: base.dark })

export const linkBg = theme('mode', { light: mint, dark: yellow })
export const linkColor = theme('mode', { light: text, dark: bg })
export const lightMuted = '#5a5a5a'
export const darkMuted = '#c6c7c6'

export const gridGap = (num: number) => rhythm(num * 0.25)
export const navbarHeight = `4em`
export const remainingHeight = `calc(100vh - 64px)`
export const borderRadius = `0.3em`

const makeShadow = (color: string) => `
${darken(0.05, color)} 0px 1px 5px 0px,
${darken(0.09, color)} 0px 2px 2px 0px,
${darken(0.1, color)} 0px 3px 1px -2px`

const makeHoverShadow = (color: string) => `${darken(0.1, color)} 0px 3px 20px 0px`

export const shadow = theme('mode', {
  light: makeShadow(`#c6c7c6`),
  dark: makeShadow(`#111`)
})
export const hoverShadow = theme('mode', {
  light: makeHoverShadow(`#c6c7c6`),
  dark: makeHoverShadow(`#111`)
})
export const containerWidths = {
  sm: `540px`,
  md: `720px`,
  lg: `960px`,
  xl: `1200px`
}

export const media = generateMedia({
  sm: containerWidths.sm,
  md: containerWidths.md,
  lg: containerWidths.lg,
  xl: containerWidths.xl
})

export const github = theme('mode', { light: '#333333', dark: '#f7f7f7' })
export const githubHover = theme('mode', {
  light: lighten(0.5, `#333333`),
  dark: darken(0.3, `#f7f7f7`)
})

export const linkedin = `#0077B5`
export const linkedinHover = darken(0.1, linkedin)

export const medium = `#00ab6c`
export const mediumHover = darken(0.1, medium)

export const behance = `#1769ff`
export const behanceHover = darken(0.1, behance)

export const instagram = `#E1306C`
export const instagramHover = darken(0.1, instagram)

export const buttonStyles = css`
  display: inline-block;
  box-sizing: content-box;
  font: inherit;
  font-weight: 600;
  line-height: normal;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
`

export const Main = styled.main`
  padding-top: ${rhythm(1)};
`

export const anchorStyles = css`
  .link {
    padding: 3px 3px 0 3px;
    color: ${text};
    text-decoration: none;
    border-bottom: 3px solid ${linkBg};
    :hover {
      padding: 0;
      color: ${linkColor};
      background: ${linkBg};
      border: 3px solid ${linkBg};
      border-radius: 2px;
    }
  }

  .link.active {
    padding: 0;
    border-bottom: 3px solid ${primary};
    :hover {
      background: #f2f2f2;
      border-color: #f2f2f2;
      border-top: none;
      border-right: none;
      border-left: none;
    }
  }
`

export const GlobalStyle = createGlobalStyle`


  ${anchorStyles}

  .button,
  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    ${buttonStyles}
  }

  html {
    /* font-size: var(--typography__fontSize); */
  }

  body {
    color: ${text};
    /* line-height: var(--spacing__vertical--1); */
    background: ${bg};
  }




  section {
    margin: ${rhythm(1)} 0;
  }


  footer {
    width: 100%;
    margin: 0;
    padding: ${rhythm(1)} 0;
  }


  hr {
    height: 2px;
    background: ${theme('mode', { light: `#c6c7c6`, dark: '#000102' })}
  }
  .hashtag {
    color: ${bg};
  }


  .social-icon {
    transition: all 0.25s ease;
  }

  .github {
    color: ${github};
    &:hover {
      color: ${githubHover};
    }
  }

  .linkedin {
    color: ${linkedin};
    &:hover {
      color: ${linkedinHover};
    }
  }

  .medium {
    color: ${medium};
    &:hover {
      color: ${mediumHover};
    }
  }

  .behance {
    color: ${behance};
    &:hover {
      color: ${behanceHover};
    }
  }

  .instagram {
    color: ${instagram};
    &:hover {
      color: ${instagramHover};
    }
  }

  #disqus_thread {
    padding: 1em;
    background: ${bg};
    border-radius: ${borderRadius};
  }
  .react-github-calendar {
    grid-column: full;
    align-self: end;
    width: 100%;
    min-height: 7em;
    margin: 0;
    padding: 0;
    padding-top: 1em;
    text-align: center;
  }

  .react-github-calendar__title {
    display: none;
  }
  .react-github-calendar__chart {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .react-github-calendar__meta {
    display: none;
    margin: 0;
    padding: 0;
  }

  #resume {
    max-width: 720px;
    margin: 0 auto;
  }

`

const sameSyntax = css`
  pre[class*='language-'] {
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #afa0fe;
    font-size: 14px;
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier,
      monospace;
    line-height: 1.375;
    direction: ltr;
    white-space: pre;
    text-align: left;
    word-break: normal;
    word-spacing: normal;
    tab-size: 4;
    hyphens: none;
    background: #2a2734;
  }
`
const darkModeSyntax = css`
  ${sameSyntax};
  /* stylelint-disable */
  pre[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #6a51e6;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6c6783;
  }

  .token.punctuation {
    color: #6c6783;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.operator,
  .token.number {
    color: #e09142;
  }

  .token.property,
  .token.function {
    color: #c4b9fe;
  }

  .token.tag-id,
  .token.selector,
  .token.atrule-id {
    color: #eeebff;
  }

  code.language-javascript,
  .token.attr-name {
    color: #c4b9fe;
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
    color: #fc9;
  }

  .token.placeholder,
  .token.variable {
    color: #fc9;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    text-decoration: none;
    border-bottom: 1px dotted #eeebff;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #c4b9fe;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #8a75f5;
    outline-offset: 0.4em;
  }

  .line-numbers .line-numbers-rows {
    border-right-color: #2c2937;
  }

  .line-numbers-rows > span:before {
    color: #3c3949;
  }

  .line-highlight {
    background: rgba(224, 145, 66, 0.2);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(70%, rgba(224, 145, 66, 0.2)),
      to(rgba(224, 145, 66, 0))
    );
    background: linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0));
  }
`
const lightModeSyntax = css`
  ${sameSyntax}
  pre[class*='language-'],
  code[class*='language-'] {
    background: #fbfaf9;
  }
  pre[class*='language-'] {
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  code[class*='language-'] ::selection,
  pre[class*='language-'] ::selection {
    text-shadow: none;
    background: #fbfaf9;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #c3bdb6;
  }

  .token.punctuation {
    color: #c3bdb6;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.operator,
  .token.number {
    color: #6a51e6;
  }

  .token.property,
  .token.function {
    color: #e09142;
  }

  .token.tag-id,
  .token.selector,
  .token.atrule-id {
    color: #b37537;
  }

  code.language-javascript,
  .token.attr-name {
    color: #e09142;
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
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
    color: #8a75f5;
  }

  .token.placeholder,
  .token.variable {
    color: #c4b9fe;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    text-decoration: none;
    border-bottom: 1px dotted #b37537;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #e09142;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #e09142;
    outline-offset: 0.4em;
  }

  .line-numbers .line-numbers-rows {
    border-right-color: #f5f3f0;
  }

  .line-numbers-rows > span:before {
    color: #d8d1ca;
  }

  .line-highlight {
    background: rgba(179, 117, 55, 0.2);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(70%, rgba(179, 117, 55, 0.2)),
      to(rgba(179, 117, 55, 0))
    );
    background: linear-gradient(to right, rgba(179, 117, 55, 0.2) 70%, rgba(179, 117, 55, 0));
  }
`

export const codeSyntax = theme('mode', { light: lightModeSyntax, dark: darkModeSyntax })
