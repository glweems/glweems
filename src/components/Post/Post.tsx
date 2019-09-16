import React from 'react';
import Img from 'gatsby-image';
import RehypeReact from 'rehype-react';
import { MarkdownRemark } from '../..';
import { Link } from '../Common';
import { Header } from './PostStyles';
import Tags from '../Tags';

export { Article } from './PostStyles';

interface PostInfo {
  date: Date;
  time: number;
  comments: number;
}

export const Content = ({ elements }: { elements: unknown }) =>
  new RehypeReact({
    createElement: React.createElement,
    components: { a: Link },
  }).Compiler(elements).props.children;

export const PostHeader = ({ post }: { post: MarkdownRemark }) => (
  <>
    <div>
      <Header>
        <h1>{post.frontmatter.title}</h1>
        <h2 className="subtitle">{post.frontmatter.subtitle}</h2>
        <small>
          {post.frontmatter.date} - {post.timeToRead} min read
        </small>
      </Header>
      <Tags items={post.frontmatter.tags} />
    </div>
    <Img
      className="flush"
      fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
    />
  </>
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

export default PostInfo;
