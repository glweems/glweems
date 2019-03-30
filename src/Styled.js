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
