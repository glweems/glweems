import styled from 'styled-components'
import { Tag } from 'elements'

export const Card = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1.5em;
  min-width: ${props => (props.minwidth ? props.minwidth : null)};
  width: 100%;
  padding: 0.5rem;

  *:not(${Tag}) {
    margin: 0;
    padding: 0;
  }
`

export const CardImg = styled.div`
  height: ${props => (props.height ? props.height : `150px`)};
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 3px;
  :hover {
    border: 2px solid ${props => props.theme.muted};
  }
`

export const Title = styled.h4`
  max-height: 37px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`

export const Subtitle = styled.small`
  color: ${props => props.theme.muted};
  font-style: normal;
  font-weight: 200;
  line-height: 14px;
  margin-bottom: 0.5rem;
  max-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const CardLink = styled.span`
  color: ${props => props.theme.blue};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
  :hover {
    text-decoration: underline;
  }
`

export default { Card, Title, Subtitle, CardLink }
