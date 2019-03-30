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
export const Tag = styled.div`
  /* background: ${Theme.colors.blue}; */
  background: ${Theme.colors.light};
  font-size: 13px;
  font-weight: medium;
  /* border-radius: 0.25rem; */
  /* padding: 0px 12px; */
`
