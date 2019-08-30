import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../utils/theme';
import { MarkdownRemark } from '..';

interface PostInfo {
  date: Date;
  time: number;
  comments: number;
}

const Header = styled.header`
  margin-top: 2em;
  .subtitle {
    margin-top: 0.5em;
    color: ${props => props.theme.colors.muted};
  }
  small {
    color: ${props => props.theme.darkColors.muted};
    font-style: italic;
  }
  img {
    margin-top: 1.5em;
  }
`;

export const PostHeader = ({ post }: { post: MarkdownRemark }) => (
  <Header>
    <h1>{post.frontmatter.title}</h1>
    <h2 className="subtitle">{post.frontmatter.subtitle}</h2>
    <small>
      {post.frontmatter.date} - {post.timeToRead} min read
    </small>
    <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
  </Header>
);

export const PostInfo = ({ date, time, comments }: PostInfo) => {
  return (
    <div>
      <p>{date}</p>
      <p>{time}</p>
      <p>{comments}</p>
    </div>
  );
};

// ? a b c d e f g h i j k l m n o p q r s t u v w x y z

export const Article = styled.article`
  display: grid;
  grid-auto-rows: auto;
  grid-template-areas: 'a article z';
  grid-template-columns: 0.25em 1fr 0.25em;
  /* * {
    width: 100%;
  } */
  > * {
    grid-column: article;
    /* max-width: 100%; */
  }
  iframe {
    grid-column: a / z;
  }
  .gatsby-resp-image-wrapper {
    grid-column: article;
    max-width: 100%;
    margin-bottom: 2em;
  }

  .gatsby-highlight,
  p {
    margin-top: 2.25em;
  }

  h1 {
    color: ${props => props.theme.colors.light};
    font-size: 1.75em;
  }

  h2 {
    margin-top: 3em;
    color: ${props => props.theme.colors.muted};
    font-size: 1em;
  }

  img {
    border-radius: 0.25em;
  }

  blockquote {
    /* width: 100%; */
    /* grid-column: a / article; */
    color: ${props => props.theme.darkColors.light};
    font-style: italic;
    border-color: ${props => props.theme.colors.yellow};
    *,
    p {
      margin: 0;
    }
  }

  a.anchor {
    svg {
      fill: ${props => props.theme.colors.light};
    }
  }

  ${media.greaterThan('md')`

    grid-template-areas: 'a b c d article w x y z';
    grid-template-columns: 0.5em 1fr 1fr .5em 720px .5em 1fr 1fr 0.5em;
    iframe {
      grid-column: c / x;
    }
    .gatsby-resp-image-wrapper {
      grid-column: b / y;
    }
    blockquote {
      grid-column-start: d;
    }
  `}
`;

export default PostInfo;
