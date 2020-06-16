import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { Date, Link } from './Common'
import Tags from './Tags'

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

interface BlogPostPreviewProps {
  path: string
  title: string
  date: any
  tags: string[]
  excerpt: string
  fluid?: any
}

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ path, title, date, tags, excerpt, fluid }) => (
  <Wrapper>
    <Title>
      <Link to={path}>{title}</Link>
    </Title>

    <Date>{date}</Date>

    <Excerpt>{excerpt}</Excerpt>

    <Tags items={tags} />

    <Link to={path} className="img" unstyled>
      <Img fluid={fluid as any} />
    </Link>
  </Wrapper>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'title title'
    'excerpt img'
    'date img'
    'tags tags';
  grid-template-rows: auto max-content auto auto;

  grid-template-columns: minmax(0, 450px) minmax(0, 30%);
  gap: 1em;
  align-items: flex-start;
  justify-content: flex-start;
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
export default BlogPostPreview
