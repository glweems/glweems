import styled from 'styled-components'
import Theme, { MQ } from './Theme'

export const Container = styled.div`
  max-width: 100%;
  overflow: scroll;
  margin: 0 auto;
  padding: ${Theme.padding};
  ${MQ.laptopL(`max-width: 1140px`)}
  ${MQ.desktop(`max-width: 1440px`)};
`
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  *:not(:last-child) {
    margin-right: 0.5rem;
  }
`
export const Scroller = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  max-width: 100%;
  overflow: scroll;
  *:not(:last-child) {
    margin-right: 0.5rem;
  }
`
export const Tag = styled.div`
  /* background: ${Theme.colors.blue}; */
  color: ${Theme.colors.blue};
  font-size: 13px;
  font-weight: medium;
  min-width: fit-content;
  margin: 0;
  border-radius: 0.25rem;
  padding: 0px 12px;
  ::before {
    content: '#';
  }
`

export const Heading = styled.h1`
  font-family: ${Theme.headingFont};
  color: ${Theme.colors.muted};
  margin: 0 0 0.25rem 0.25rem;
  font-size: 50px;
`
export const Button = styled.button`
  background: ${Theme.colors.light};
  border-color: ${Theme.colors.dark};
  border-radius: 1px;
  border-style: solid;
  border-width: 2px;
  color: ${Theme.colors.dark};
  display: inline-block;
  font-family: ${Theme.headingFont};
  font-size: 16px;
  font-weight: 500;
  padding: 4px 6px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  :hover {
    background: ${Theme.colors.dark};
    color: ${Theme.colors.light};
    transition: all 0.4s ease 0s;
  }
  ${props =>
    props.blue &&
    css`
      background: ${Theme.colors.blue};
      color: ${Theme.colors.light};
      border-color: ${Theme.colors.blue};
      :hover {
        background: ${Theme.colors.light};
        color: ${Theme.colors.blue};
        border-color: ${Theme.colors.blue};
      }
    `}
  ${props =>
    props.red &&
    css`
      background: ${Theme.colors.red};
      color: ${Theme.colors.light};
      border-color: ${Theme.colors.red};
      :hover {
        background: ${Theme.colors.light};
        color: ${Theme.colors.red};
        border-color: ${Theme.colors.red};
      }
    `}
  ${props =>
    props.center &&
    css`
      margin: 0 auto;
    `}
`
