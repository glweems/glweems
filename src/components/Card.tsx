import { motion } from 'framer-motion'
import { navigate } from 'gatsby'
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { media } from '../theme'
import Link from './Common/Link'

type CardProps = {
  title?: string
  subtitle?: string
  date?: string
  path?: string
  Image?: any
  linkText?: string
  tags?: string[]
}

export default function Card({
  title,
  subtitle,
  date,
  path,
  Image,
  linkText,
  children,
}: PropsWithChildren<CardProps>) {
  function handleImgClick(event: React.MouseEvent) {
    navigate(event.currentTarget.id)
  }

  return (
    <Styled>
      {title && (
        <h3 className="Card--title">
          {path ? <Link to={path}>{title}</Link> : title}
        </h3>
      )}

      {date && <time className="date Card--date"> {date}</time>}

      {subtitle && <p className="Card--subtitle">{subtitle}</p>}

      {path && (
        <Link to={path} className="Card--link" aria-label={`View ${title}`}>
          {linkText}
        </Link>
      )}

      {Image && (
        <motion.div
          id={path}
          onClick={handleImgClick}
          className="Card--img"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.975 }}
        >
          {Image}
        </motion.div>
      )}
      <div className="Card--children">{children}</div>
    </Styled>
  )
}

const Styled = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-column-gap: ${({ theme }) => theme.space[4]};
  grid-template:
    'date date' auto
    'title title' auto
    'img subtitle' auto
    'img link' auto
    'img children' auto;
  grid-template-columns: auto 1fr;
  justify-items: flex-start;
  width: 100%;
  /* margin-bottom: ${({ theme }) => theme.space[12]}; */

  .Card--title {
    grid-area: title;
    /* margin-left: ${({ theme }) => theme.space[4]}; */
    color: ${({ theme }) => theme.colors.text};
    ${media.greaterThan('md')`
      margin-left: unset;
    `};
  }

  .Card--date {
    grid-area: date;
  }

  .Card--subtitle {
    grid-area: subtitle;
    opacity: 0.9;
  }

  .Card--img {
    grid-area: img;
  }
  * {
    display: flex;
    flex-direction: column;
  }
  .Card--link {
    grid-area: link;
    align-self: flex-end;
    /* margin-top: auto; */
  }

  ${media.greaterThan('md')`
    grid-template-areas:
      'img date'
      'img title'
      'img subtitle'
      'img link';
  `};
`

Card.defaultProps = {
  linkText: 'Read',
}
