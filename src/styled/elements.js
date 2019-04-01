import styled from 'styled-components'
import theme, { MQ } from 'src/styled/theme'

export const Main = styled.main`
  max-width: 100%;
  overflow: hidden;
`
export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  ${MQ.laptopL(`max-width: 1140px`)}
  ${MQ.desktop(`max-width: 1440px`)};
`
export const Tag = styled.div``

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
      : theme.colors.dark};
`

export const Button = styled.button`
  background: ${theme.colors.light};
  border-color: ${theme.colors.dark};
  border-radius: 1px;
  border-style: solid;
  border-width: 2px;
  color: ${theme.colors.dark};
  display: inline-block;
  font-family: ${theme.font};
  font-size: 16px;
  font-weight: 500;
  padding: 4px 6px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
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
  width: 100%;
  display: flex;
  a:not(:last-child) {
    margin-right: 0.25rem;
  }
  justify-content: ${props =>
    props.center
      ? 'center'
      : props.end
      ? 'flex-end'
      : props.between
      ? 'space-between'
      : props.evenly
      ? 'space-evenly'
      : 'flex-start'};

  overflow: ${props => (props.scroll ? 'auto' : '')};
`
