import { DiscussionEmbed } from 'disqus-react'
import * as React from 'react'
import RehypeReact from 'rehype-react'
import Img from 'gatsby-image'
import { Frontmatter } from '../..'
import { Blockquote, Subtitle, Title, Date } from '../../components/Common'
import Tags from '../../components/Tags'
import { ImgDetail, StyledHeader } from './styles'

interface HeaderProps {
  frontmatter: Frontmatter
  timeToRead: number
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
        <Tags items={frontmatter.tags} />
      </div>
      <Img className="thumbnail" fluid={frontmatter.thumbnail.childImageSharp.fluid} />
    </div>
  </StyledHeader>
)

export const Content: React.FC<{ elements: object }> = ({ elements }) =>
  new RehypeReact({
    createElement: React.createElement,
    components: { em: ImgDetail, blockquote: Blockquote }
  }).Compiler(elements).props.children

interface CommentsProps {
  config: {
    disqusShortName: string
    title: string
    identifier: string
    url: string
  }
}

export const Comments: React.FC<CommentsProps> = ({ config: { title, identifier, url, disqusShortName } }) => (
  <DiscussionEmbed shortname={disqusShortName} config={{ url, identifier, title }} />
)

export { ShareButtons } from './ShareButtons'