import styled, { css } from 'styled-components'
import theme from './theme'

interface Props {
  minwidth: string
}

export const Card: Props = styled.div`
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: space-between;
  align-items: space-between;
  min-width: ${props => (props.minwidth ? props.minwidth : null)};
  padding: 0.25rem;
  width: 100%;

  ${props =>
    props.light &&
    css`
      background: ${theme.colors.light};
    `}

  ${props =>
    props.bordered &&
    css`
      border-width: 2px;
      border-style: solid;
      border-color: ${theme.colors.dark};
    `};
`

export const CardBody = styled.div`
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-position: 50% 50%;
  background-size: cover;
`

export const CardImg = styled.div`
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-position: 50% 50%;
  background-size: cover;
  height: ${props => (props.height ? props.height : `200px`)};
  border-radius: 3px;
`

export const CardTitle = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.5rem;
`

export const CardSubtitle = styled.small`
  color: ${theme.colors.secondary};
  font-style: normal;
  font-weight: 200;
  line-height: 14px;
  margin-bottom: 0.5rem;
  max-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const CardLink = styled.span`
  color: ${theme.colors.blue};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding-top: 0.25rem;
  :hover {
    text-decoration: underline;
  }
`
