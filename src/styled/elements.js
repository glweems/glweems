import styled, { css } from 'styled-components'
import theme, { MQ } from 'src/styled/theme'
import { darken, lighten } from 'polished'

export const Main = styled.main`
  max-width: 100%;
  margin-top: 4rem;
`
export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  ${MQ.laptopL(`max-width: 1140px`)}
  ${MQ.desktop(`max-width: 1440px`)};
`
export const Tag = styled.button`
  -webkit-box-flex: 0;
  align-self: center;
  background-color: rgba(0, 173, 159, 0.06);
  border-radius: 3px;
  background: ${darken(0.1, theme.colors.light)};
  color: ${lighten(0.2, theme.colors.dark)};
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
`

export const H1 = styled.h1`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props =>
    props.red
      ? theme.colors.red
      : props.blue
      ? theme.colors.blue
      : props.green
      ? theme.colors.green
      : props.light
      ? theme.colors.light
      : props.muted
      ? theme.colors.muted
      : props.secondary
      ? theme.colors.secondary
      : theme.colors.dark};
`
export const H2 = styled.h2`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props =>
    props.red
      ? theme.colors.red
      : props.blue
      ? theme.colors.blue
      : props.green
      ? theme.colors.green
      : props.light
      ? theme.colors.light
      : props.muted
      ? theme.colors.muted
      : props.secondary
      ? theme.colors.secondary
      : theme.colors.dark};
`
export const H3 = styled.h3`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props =>
    props.red
      ? theme.colors.red
      : props.blue
      ? theme.colors.blue
      : props.green
      ? theme.colors.green
      : props.light
      ? theme.colors.light
      : props.muted
      ? theme.colors.muted
      : props.secondary
      ? theme.colors.secondary
      : theme.colors.dark};
`
export const H4 = styled.h4`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props =>
    props.red
      ? theme.colors.red
      : props.blue
      ? theme.colors.blue
      : props.green
      ? theme.colors.green
      : props.light
      ? theme.colors.light
      : props.muted
      ? theme.colors.muted
      : props.secondary
      ? theme.colors.secondary
      : theme.colors.dark};
`
export const H5 = styled.h5`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props =>
    props.red
      ? theme.colors.red
      : props.blue
      ? theme.colors.blue
      : props.green
      ? theme.colors.green
      : props.light
      ? theme.colors.light
      : props.muted
      ? theme.colors.muted
      : props.secondary
      ? theme.colors.secondary
      : theme.colors.dark};
`
export const H6 = styled.h6`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  color: ${props =>
    props.red
      ? theme.colors.red
      : props.blue
      ? theme.colors.blue
      : props.green
      ? theme.colors.green
      : props.light
      ? theme.colors.light
      : props.muted
      ? theme.colors.muted
      : props.secondary
      ? theme.colors.secondary
      : theme.colors.dark};
`

export const A = styled.a`
  color: ${props =>
    props.red
      ? theme.colors.red
      : props.blue
      ? theme.colors.blue
      : props.green
      ? theme.colors.green
      : props.light
      ? theme.colors.light
      : props.muted
      ? theme.colors.muted
      : props.secondary
      ? theme.colors.secondary
      : theme.colors.dark};

  svg {
    color: ${props =>
      props.red
        ? theme.colors.red
        : props.blue
        ? theme.colors.blue
        : props.green
        ? theme.colors.green
        : props.light
        ? theme.colors.light
        : props.muted
        ? theme.colors.muted
        : props.secondary
        ? theme.colors.secondary
        : theme.colors.dark};
  }
`

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
  a:not(:last-child) {
    margin-right: 0.25rem;
  }

  ${props =>
    props['justify-content'] &&
    css`
      justify-content: ${props['justify-content']};
    `}
  ${props =>
    props['align-content'] &&
    css`
      align-content: ${props['align-content']};
    `}
  ${props =>
    props['align-items'] &&
    css`
      align-items: ${props['align-items']};
    `}

  overflow: ${props => (props.scroll ? 'auto' : '')};
  /* overflow: touch; */
  -webkit-overflow-scrolling: touch;
  overflow: ${props => (props.hidden ? 'hidden' : '')};
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

export const LI = styled.li`
  margin: 0;
`
