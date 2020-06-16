import { navigate } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { media } from '../theme';
import { Date, Link } from './Common';
import Tags from './Tags';

interface BlogPostPreviewProps {
  path: string;
  title: string;
  date: any;
  tags: string[];
  excerpt: string;
  fluid: FluidObject;
}

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ path, title, date, tags, excerpt, fluid }) => (
  <Wrapper>
    <div className="img" onClick={() => navigate(path)}>
      <Img fluid={fluid} />
    </div>

    <h2 className="title">
      <Link to={path}>{title}</Link>
    </h2>

    <Date className="date">{date}</Date>

    <p className="description">{excerpt}</p>

    <Tags tags={tags} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'img'
    'title'
    'date'
    'description'
    'tags';
  grid-template-rows: 250px repeat(3, auto);

  grid-template-columns: 1fr;
  gap: 0.125em;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease 0s;
  h2,
  .tags,
  .date,
  .description {
    margin: 0;
    padding: 0 1em;
  }

  .title {
    grid-area: title;
    /* padding-top: 1em; */
    font-size: 1.125em;
    line-height: 2em;
  }

  .description {
    grid-area: description;
    align-self: flex-start;
    font-size: 15px;
  }

  .tags {
    grid-area: tags;
    align-self: flex-end;
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

  .link {
    grid-area: link;
    justify-self: flex-start;
    margin-top: 1em;
  }

  ${media.greaterThan(`sm`)`
    grid-template-rows:150px repeat(3, auto);
  `}

  &:hover {
    transform: scale(1.01);
  }
`;
export default BlogPostPreview;
