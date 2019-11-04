/* eslint-disable no-nested-ternary */
import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import Tags from './Tags'
import { rootBg, borderRadius, text, media, rhythm } from '../theme'
import { Link, Date } from './Common'
import Img, { FluidObject } from 'gatsby-image'
interface Props {
  title?: string
  subtitle?: string
  path?: string
  tags?: string[]
  children?: React.ReactNode
  description?: string
  fluid?: FluidObject
  date?: any
}

const Card: React.FC<Props> = ({ title, description, fluid, path, tags, children, date }) => {
  const go = () => (link ? navigate(link) : null)

  return (
    <Wrapper>
      {fluid && (
        <div className="img">
          {path ? (
            <Link to={path} unstyled>
              <Img fluid={fluid} />
            </Link>
          ) : (
            <Img fluid={fluid} />
          )}
        </div>
      )}

      {title && <h2 className="title">{path ? <Link to={path}>{title}</Link> : title}</h2>}

      <p className="description">{description}</p>

      {date && <Date className="date">{date}</Date>}

      <div className="body">{children}</div>
      {tags && <Tags items={tags} />}
    </Wrapper>
  )
}

export default Card

export const Cards = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  gap: ${rhythm(1)};

  ${media.greaterThan('md')`
      grid-template-columns: repeat(2, 1fr);
    `}

  ${media.greaterThan('lg')`
      grid-template-columns: repeat(3, 1fr);
    `}
`
export const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-areas:
    'img'
    'title'
    'description'
    'body'
    'date'
    'tags';
  grid-template-rows: 250px;
  grid-template-columns: auto;
  gap: 1em;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease 0s;

  &:hover {
    transform: scale(1.01);
  }

  .title,
  .tags,
  .date,
  .description,
  .body {
    margin: 0;
    padding: 0 1em;
  }
  .title,
  .description {
    align-self: flex-start;
  }

  .date,
  .tags {
    align-self: flex-end;
  }

  .body {
    grid-area: body;
  }

  .title {
    grid-area: title;
    font-size: 1.125em;
    line-height: 2em;
  }

  .description {
    grid-area: description;
    align-self: flex-start;
    /* font-size: 15px; */
  }

  .tags {
    grid-area: tags;
    padding-bottom: 1em;
  }

  ${Date} {
    grid-area: date;
  }

  .img {
    grid-area: img;
    /* align-self: flex-start; */
    height: 100%;
    cursor: pointer;
    .gatsby-image-wrapper {
      height: 100%;
      /* height: 100%; */
      /* border-radius: 0.125em; */
    }
  }

  ${media.greaterThan(`sm`)`
    grid-template-rows: 150px;
  `}
`
