import { createGlobalStyle } from 'styled-components'

const sameStyles = { font: `Roboto`, accent: `blue` }

export const light = { fg: `black`, bg: `white`, ...sameStyles }

export const dark = { fg: `white`, bg: `black`, ...sameStyles }

export const GlobalStyle = createGlobalStyle`
html,body {
  background:${props => props.theme.bg};
  color:${props => props.theme.fg};
}`
