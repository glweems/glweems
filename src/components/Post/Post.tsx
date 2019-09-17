import React from 'react';
import Img from 'gatsby-image';
import { DiscussionEmbed } from 'disqus-react';
import { MDX, Frontmatter } from '../..';
import { Header, StyledInfo } from './PostStyles';
import Tags from '../Tags';

export { Article } from './PostStyles';

interface PostInfo {
  date: Date | string | any;
  time: number;
}

export const PostHeader = ({
  frontmatter,
  timeToRead,
}: {
  frontmatter: Frontmatter;
  timeToRead: number;
}) => [
  <Header>
    <h1>{frontmatter.title}</h1>
    <h2 className="subtitle">{frontmatter.subtitle}</h2>
    <Tags items={frontmatter.tags} />
    <Info date={frontmatter.date} time={timeToRead} />
  </Header>,

  <Img
    className="thumbnail"
    fluid={frontmatter.thumbnail.childImageSharp.fluid}
  />,
];

export const Info = ({ date, time }: PostInfo) => {
  return (
    <StyledInfo>
      {date} - {time} min read
    </StyledInfo>
  );
};

interface CommentsProps {
  title: string;
  identifier: number;
  path: string;
}

export const Comments = ({ title, identifier, path }: CommentsProps) => {
  const disqusShortName = 'https-glweems-com';
  const disqusConfig = {
    url: `https://glweems.com${path}`,
    identifier: String(identifier),
    title,
  };
  return (
    <DiscussionEmbed
      key="Diqus"
      shortname={disqusShortName}
      config={disqusConfig}
    />
  );
};
