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