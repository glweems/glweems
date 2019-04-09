import styled, { css } from 'styled-components'
import theme, { media } from 'src/styled/theme'

import { lighten } from 'polished'

export const Main = styled.main`
  max-width: 100%;
  padding-top: 4rem;
`
export const Container = styled.div`
  max-width: ${992 / 16}em;
  margin: 0 auto;
  padding: 0.5rem;
  ${media.phone`width: 100%;`};
`

export const Tag = styled.span`
  -webkit-box-flex: 0;
  align-self: center;
  border-radius: 3px;
  display: inline-block;
  flex: 0 0 auto;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  margin-right: 8px;
  padding: 1px 4px;
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;

  ${props =>
    props.hashtag &&
    css`
      ::before {
        content: '#';
      }
    `}

  background: ${props =>
    props.bg ? lighten(0.6, props.theme.colors.dark) : 'none'};
  color: ${props =>
    props.color ? props.color : lighten(0.2, props.theme.colors.dark)};
`

export const H1 = styled.h1``
export const H2 = styled.h2``
export const H3 = styled.h3``
export const H4 = styled.h4``
export const H5 = styled.h5``
export const H6 = styled.h6``
export const A = styled.a``

export const Button = styled.button`
  background: ${theme.colors.light};
  border-color: ${theme.colors.dark};
  border: none;
  color: ${theme.colors.dark};
  font-family: ${theme.font};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.125px;
  ${props =>
    props.bordered &&
    css`
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
    `}
  :hover {
    background: ${theme.colors.dark};
    color: ${theme.colors.light};
    transition: all 0.4s ease 0s;
  }
  ${props =>
    props.blue &&
    css`
      background: ${theme.colors.blue};
      color: ${theme.colors.light};
      border-color: ${theme.colors.blue};
      :hover {
        background: ${theme.colors.light};
        color: ${theme.colors.blue};
        border-color: ${theme.colors.blue};
      }
    `}
  ${props =>
    props.dark &&
    css`
      background: ${theme.colors.dark};
      color: ${theme.colors.light};
      border-color: ${theme.colors.light};
      :hover {
        background: ${theme.colors.light};
        color: ${theme.colors.dark};
        border-color: ${theme.colors.dark};
      }
    `}
  ${props =>
    props.red &&
    css`
      background: ${theme.colors.red};
      color: ${theme.colors.light};
      border-color: ${theme.colors.red};
      :hover {
        background: ${theme.colors.light};
        color: ${theme.colors.red};
        border-color: ${theme.colors.red};
      }
    `}
  ${props =>
    props.center &&
    css`
      margin: 0 auto;
    `}
`

export const Flex = styled.div`
  display: flex;

/* width */
${props =>
  props.w100 &&
  css`
    width: 100%;
  `}
/* column */
${props =>
  props.column &&
  css`
    flex-direction: column;
  `}

/* space-between */
${props =>
  props.between &&
  css`
    justify-content: space-between;
  `}

/* evenly */
${props =>
  props.evenly &&
  css`
    justify-content: space-evenly;
  `}

/* overflow */
${props =>
  props.wrap &&
  css`
    flex-wrap: wrap;
  `}



  overflow: ${props => (props.scroll ? 'auto' : 'hidden')};
  -webkit-overflow-scrolling: touch;
`

export const List = styled.ul`
  ${props =>
    props['no-bullets'] &&
    css`
      margin: 0;
      list-style: none;
    `}
text-align: ${props =>
  props['text-right'] ? 'right' : props['text-center'] ? 'center' : 'left'}
`

export const IconLink = styled.a`
  color: ${props => props.theme.colors.dark}!important;
  :hover {
    color: ${props => props.theme.colors.blue}!important;
  }
`

export const LI = styled.li`
  margin: 0;
`
