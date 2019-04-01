import styled, { css } from 'styled-components'
import theme from './theme'

export const Card = styled.div`
  min-width: ${props => (props.minwidth ? props.minwidth : '')};
  ${props =>
    props.bordered &&
    css`
      border-width: 2px;
      border-style: solid;
      border-color: ${theme.colors.dark};
    `}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.25rem;
`
export const CardBody = styled.div`
  background-image: ${props => (props.img ? `url(${props.img})` : '')};
  background-position: 50% 50%;
  background-size: cover;
`

export const CardImg = styled.div`
  background-image: ${props => (props.img ? `url(${props.img})` : '')};
  background-position: 50% 50%;
  background-size: cover;
  height: ${props => (props.height ? `url(${props.height})` : `100px`)};
  border-radius: 3px;
`

export const CardTitle = styled.h4`
  color: ${theme.colors.dark};
  font-family: ${theme.font};
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  margin-bottom: 0.65rem;
  text-overflow: ellipsis;
`

export const CardSubtitle = styled.small`
  color: ${theme.colors.secondary};
  margin-bottom: 0.5rem;
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0;
  line-height: 14px;
  max-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateY(1.52px);
`

export const CardLink = styled.span`
  color: ${theme.colors.blue};
  padding-top: 0.25rem;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
  :hover {
    text-decoration: underline;
  }
`
