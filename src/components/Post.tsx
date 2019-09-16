import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import RehypeReact from 'rehype-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { MarkdownRemark } from '..';
import * as config from '../style';

interface PostInfo {
  date: Date;
  time: number;
  comments: number;
}

export const Content = ({ elements }: { elements: unknown }) =>
  new RehypeReact({
    createElement: React.createElement,
    components: { a: OutboundLink },
  }).Compiler(elements).props.children;

const Header = styled.header`
  margin: 2em 0;
  .subtitle {
    margin-top: 0.5em;
    color: ${config.muted};
  }
  small {
    color: ${config.muted};
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
  grid-template-columns: 1em 1fr 1em;

  * {
    color: ${config.text};
  }

  > * {
    grid-column: article;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  blockquote {
    display: grid;
    grid-auto-rows: auto;
    grid-column: a / z;
    grid-template-areas: 'a article z';
    grid-template-columns: 1em 1fr 1em;
    padding-left: 0;
    color: ${config.text};
    font-style: italic;
    border-color: ${config.primary};
    p {
      color: ${config.muted} !important;
    }
    > * {
      grid-area: article;
    }
  }

  .gatsby-highlight {
    grid-column: a / z;
  }

  iframe {
    grid-column: a / z;
  }
  .gatsby-resp-image-wrapper {
    grid-column: article;
    max-width: 100%;
    margin-bottom: 2em;
  }

  img {
    border-radius: ${config.borderRadius};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${config.primary};
  }

  ${config.media.greaterThan('sm')`
    grid-template-columns: 0.5em 1fr 1fr 1em 720px 1em 1fr 1fr 0.5em;
    grid-template-areas: 'a b c d article w x y z';
    * >  {
      grid-column: article;
    }
    iframe {
      grid-column: c / x;
    }
    .gatsby-resp-image-wrapper {
      grid-column: b / y;
    }

    .gatsby-highlight {
      border-radius: ${config.borderRadius};
      grid-column: article;
    }

    blockquote {
      display: grid;
      grid-auto-rows: auto;
      grid-column: d / w;
      grid-template-areas: 'a article z';
      grid-template-columns: 1em 1fr 1em;
      padding-left: 0;
      > * {
        grid-area: article;
      }
    }
`}
`;

export default PostInfo;
