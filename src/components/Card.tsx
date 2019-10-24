import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Tags from './Tags'
import { rootBg, borderRadius, media, text } from '../theme'
import { Link } from './Common'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 12em 1fr auto;
  grid-template-columns: 1fr;
  align-content: flex-start;
  color: ${text};
  border-radius: ${borderRadius};
  cursor: pointer;
  :hover {
    background: ${rootBg};
    .gatsby-image-wrapper {
      transform: scale(1.01);
    }
  }
  transition: all 0.25s ease 0s;
`

export const Header = styled.div`
  padding: 0 0.5em;
  overflow: hidden;
  .title {
    margin-bottom: 0.5em;
    padding: 0.5em 0.25em;
    overflow: hidden;
    font-size: 1.25em;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
`

export const Body = styled.div`
  padding: 1em 0.5em;

  p {
    margin-bottom: 0;
  }
`

export const Footer = styled.div`
  margin: 0;
  padding: 0 0.5em 0.25em 0.5em;
  overflow: hidden;
  color: ${text};
`

interface Card {
  title: string
  subtitle: string
  link?: string
  tags: string[]
  children?: Child
  Image?: React.ReactElement
}

const Card = ({
  title = 'Card Title',
  subtitle = 'This is the cards subtitle',
  link,
  tags = ['one', 'two', 'three'],
  children,
  Image
}: Card) => {
  const go = () => (link ? navigate(link) : null)

  return (
    <Wrapper onClick={go}>
      <Header>
        <h4 className="title">{link ? <Link to={link}>{title}</Link> : title}</h4>
      </Header>

      {Image || Image}

      <Body>
        <p>{subtitle}</p>
        {children}
      </Body>
      <Footer>
        <Tags items={tags} />
      </Footer>
    </Wrapper>
  )
}

export default Card

export const Cards = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 1.5em;
  ${media.greaterThan('md')`
    grid-template-columns: repeat(2, minmax(300px, 1fr));
`}
`
