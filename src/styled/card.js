import styled from 'styled-components'
import { Tag } from 'elements'
import { lighten, darken } from 'polished'

export const Card = styled.div`
  display: grid;
  gap: 0.25rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto auto;
  min-width: ${props => (props.minwidth ? props.minwidth : null)};
  width: 100%;

  *:not(${Tag}) {
    margin: 0;
    padding: 0;
  }
  .card-img {
    height: 125px;
    border-radius: 3px;
    /* border: 2px solid ${props => props.theme.bg}; */
    :hover {
      border: 2px solid ${props => lighten(0.5, props.theme.text)};
    }
    transition: all 0.25s ease-in-out;
  }
  background: ${props => darken(0.03, props.theme.bg)};
  border: 2px solid ${props => darken(0.06, props.theme.bg)};
  border-radius: 3px;
  margin: 0.25rem 0.5rem;
  padding: 0.25rem;
`

export const CardImg = styled.div`
  height: ${props => (props.height ? props.height : `150px`)};
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.bg};
  :hover {
    border: 2px solid ${props => lighten(0.5, props.theme.text)};
  }
  transition: all 0.25s ease-in-out;
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
