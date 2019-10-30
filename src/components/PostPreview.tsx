import React from 'react'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'
import { Link, Date } from './Common'
import Tags from './Tags'
import { rhythm } from '../theme'

const Title = styled.h2`
  margin: 0;
  line-height: 28px;
`

const Excerpt = styled.p`
  grid-area: excerpt;
  align-self: flex-start;
  margin-bottom: 0;
  font-size: 15px;
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
    'title img'
    'excerpt img'
    'date img'
    'tags tags';
  grid-template-rows: auto max-content auto auto;

  grid-template-columns: minmax(0, 450px) minmax(0, 30%);
  gap: 1em;
  justify-content: space-between;

  h2 {
    grid-area: title;
    font-size: 1.125em;
  }

  .tags {
    grid-area: tags;
    align-self: flex-end;
  }

  ${Date} {
    grid-area: date;
    margin: 0;
    padding: 0;
  }

  .img {
    grid-area: img;
    /* align-self: flex-start; */
    .gatsby-image-wrapper {
      height: 100%;
      /* border-radius: 0.125em; */
    }
  }

  .link {
    grid-area: link;
    justify-self: flex-start;
    margin-top: 1em;
  }
`

export const BlogPostPreview: React.FC<Props> = ({ path, title, date, tags, excerpt, fluid }) => (
  <Wrapper>
    <Title>
      <Link to={path}>{title}</Link>
    </Title>

    <Date>{date}</Date>

    <Excerpt>{excerpt}</Excerpt>

    <Tags items={tags} />

    <Link to={path} className="img" unstyled>
      <Img fluid={fluid} />
    </Link>
  </Wrapper>
)
export default BlogPostPreview
