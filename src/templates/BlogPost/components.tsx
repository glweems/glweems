import Img from 'gatsby-image';
import * as React from 'react';
import RehypeReact from 'rehype-react';
import { Blockquote, Date, Subtitle, Title, Link } from '../../components/Common';
import Tags from '../../components/Tags';
import { BlogTemplateQuery } from '../../types/generated';
import { ImgDetail, StyledHeader } from './styles';

interface HeaderProps {
  frontmatter: BlogTemplateQuery['post']['frontmatter'];
  timeToRead: number;
}

export const Header: React.FC<HeaderProps> = ({ frontmatter, timeToRead }) => (
  <StyledHeader>
    <div>
      <Title>{frontmatter.title}</Title>
      <Subtitle>{frontmatter.subtitle}</Subtitle>
      <div className="info">
        <Date>
          {frontmatter.date} - {timeToRead} min read
        </Date>
        <Tags tags={frontmatter.tags} />
      </div>
      <Img className="thumbnail" fluid={frontmatter.thumbnail.childImageSharp.fluid} />
    </div>
  </StyledHeader>
);

export const Content: React.FC<{ elements: object }> = ({ elements }) =>
  new RehypeReact({
    createElement: React.createElement,
    components: { em: ImgDetail, blockquote: Blockquote }
  }).Compiler(elements).props.children;

export { ShareButtons } from './ShareButtons';
