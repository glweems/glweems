import { DiscussionEmbed } from 'disqus-react'
import * as React from 'react'
import RehypeReact from 'rehype-react'
import { Frontmatter } from '../..'
import { Blockquote, Subtitle, Title } from '../../components/Common'
import Tags from '../../components/Tags'
import { ImgDetail, StyledHeader, StyledInfo } from './styles'

interface HeaderProps {
  frontmatter: Frontmatter
  timeToRead: number
}

interface PostInfo {
  date: Date | string | any
  time: number
}

const Info: React.FC<PostInfo> = ({ date, time }) => (
  <StyledInfo>
    {date} - {time} min read
  </StyledInfo>
)

export const Header: React.FC<HeaderProps> = ({ frontmatter, timeToRead }) => (
  <StyledHeader>
    <div>
      <Title>{frontmatter.title}</Title>
      <Subtitle>{frontmatter.subtitle}</Subtitle>
      <div className="info">
        <Tags items={frontmatter.tags} />
        <Info date={frontmatter.date} time={timeToRead} />
      </div>
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
