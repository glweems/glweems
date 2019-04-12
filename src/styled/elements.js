import styled, { css } from 'styled-components'

import { lighten } from 'polished'
import { media } from 'theme'

export const Main = styled.main`
  color: ${props => props.theme.text};
  background: ${props => props.theme.bg};
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
  background: ${props => lighten(0.6, props.theme.bg)};
  color: ${props => lighten(0.2, props.theme.text)};
`

export const H1 = styled.h1``
export const H2 = styled.h2``
export const H3 = styled.h3``
export const H4 = styled.h4``
export const H5 = styled.h5``
export const H6 = styled.h6``
export const A = styled.a``

export const Button = styled.button`
  background: ${props => props.theme.bg};
  border-color: ${props => props.theme.text};
  color: ${props => props.theme.text};
  border: none;
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
`

export const Flex = styled.div`
  display: flex;
  align-items: ${props => (props.alignCenter ? 'center' : null)};
  height: ${props => (props.h100 ? '100%' : null)};
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
