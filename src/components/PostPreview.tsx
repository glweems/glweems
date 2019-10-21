import React from 'react'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'
import { Link } from './Common'
import Tags from './Tags'
import { muted } from '../theme'

const Title = styled.h2`
  grid-area: title;
`
const Date = styled.small`
  grid-area: date;
  color: ${muted};
  font-weight: bold;
  font-style: italic;
`

const Excerpt = styled.p`
  grid-area: excerpt;
  margin-bottom: 0.5em;
  font-size: 13px;
`

interface Props {
  path: string
  title: string
  date: any
  tags: string[]
  excerpt: string
  fluid: FluidObject
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'title title'
    'img date'
    'img excerpt'
    'img tags'
    'link link';
  grid-template-rows: repeat(5, auto);
  grid-template-columns: 25% auto;
  gap: 0 1em;
  padding-bottom: 1em;

  .tags {
    grid-area: tags;
  }

  .img {
    grid-area: img;
    align-self: flex-start;
    .gatsby-image-wrapper {
      height: 100%;
      border-radius: 0.125em;
    }
  }

  .readmore {
    grid-area: link;
    margin-top: 1em;
  }
`

const PostPreview = ({ path, title, date, tags, excerpt, fluid }: Props) => (
  <Wrapper>
    <Title>
      <Link to={path}>{title}</Link>
    </Title>
    <Date>{date}</Date>
    <Excerpt>{excerpt}</Excerpt>
    <div className="tags">
      <Tags items={tags} />
    </div>

    <Link to={path} className="img" unstyled>
      <Img fluid={fluid} />
    </Link>

    <div className="readmore">
      <Link to={path}>Read More</Link>
    </div>
  </Wrapper>
)
export default PostPreview
