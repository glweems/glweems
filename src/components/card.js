import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import Theme, { MQ } from 'src/Theme'
import styled from 'styled-components'
// *:nth-last-child(1):nth-child(odd) { grid-column: 1 /-1; }
export const CardGrid = styled.div`
  max-width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  /* background: ${Theme.colors.light}; */
  ${MQ.mobileL(`grid-template-columns: repeat(2, 1fr); gap: 1rem 1rem;`)}
  ${MQ.tablet(`grid-template-columns: repeat(3, 1fr); gap: 1rem;`)}
  ${MQ.laptop(`grid-template-columns: repeat(4, 1fr); gap: 1.5rem;`)}
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  background: white;
  flex-basis: 100%;
  margin-bottom: 1rem;

  ${MQ.mobileL(`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 0;
  `)}
`

const Img = styled.img`
  width: 100%;
`
const Body = styled.div`
  padding: 1rem;
`

const Title = styled.h4`
  font-family: ${Theme.fontFamily.header};
  width: 100%;
`
const Subtitle = styled.h6`
  font-family: ${Theme.fontFamily.body};
  width: 100%;
`

const Card = props => {
  const { img, body, title, subtitle, link, children } = props

  return (
    <Div>
      {!img || <Img src={img} />}
      <Body>
        {!title || <Title>{title}</Title>}
        {!subtitle || <Subtitle>{subtitle}</Subtitle>}
        {!body || null}
        {!link || <Link to={link}>View Post</Link>}
        {children}
      </Body>
    </Div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.string,
}

export default Card
