import styled, { css } from 'styled-components'

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1.5em;
  justify-items: space-between;
  align-items: space-between;
  align-content: flex-end;
  min-width: ${props => (props.minwidth ? props.minwidth : null)};

  padding: 0.25rem;
  width: 100%;

  ${props =>
    props.bordered &&
    css`
      border-width: 2px;
      border-style: solid;
    `};
`

export const Header = styled.div`
  * {
    margin: 0;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`

export const CardBody = styled.div``

export const CardImg = styled.div`
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-position: 50% 50%;
  background-size: cover;
  height: ${props => (props.height ? props.height : `200px`)};
  border-radius: 3px;
`

export const Title = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.5rem;
`

export const CardSubtitle = styled.small`
  color: ${props => props.theme.colors.secondary};
  font-style: normal;
  font-weight: 200;
  line-height: 14px;
  margin-bottom: 0.5rem;
  max-height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const CardLink = styled.span`
  color: ${props => props.theme.colors.blue};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding-top: 0.25rem;
  :hover {
    text-decoration: underline;
  }
`

export default { Card, CardBody, Title, CardSubtitle, CardLink }
