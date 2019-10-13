import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'
import RehypeReact from 'rehype-react'
import SEO from '../../components/SEO'
import { MarkdownRemark, Frontmatter } from '../..'
import { Article, Header, StyledInfo } from './BlogStyles'
import { ThemeContext } from '../../components/Providers'
import Tags from '../../components/Tags'
import SwitchPages from '../../components/SwitchPages'
import ShareButtons from '../../components/Share'
import { Link } from '../../components/Common'

interface Props {
  data: {
    post: MarkdownRemark
    prev: { frontmatter: { path: string | null } }
    next: { frontmatter: { path: string | null } }
  }
}

interface PostInfo {
  date: Date | string | any
  time: number
}

const Content = ({ elements }: { elements: unknown }) =>
  new RehypeReact({
    createElement: React.createElement,
    components: { a: Link }
  }).Compiler(elements).props.children

const PostHeader = ({ frontmatter, timeToRead }: { frontmatter: Frontmatter; timeToRead: number }) => (
  <>
    <Header>
      <h1 className="title">{frontmatter.title}</h1>
      <h2 className="subtitle">{frontmatter.subtitle}</h2>
      <div className="info">
        <Tags items={frontmatter.tags} />
        <Info date={frontmatter.date} time={timeToRead} />
      </div>
    </Header>
    <Img className="thumbnail" fluid={frontmatter.thumbnail.childImageSharp.fluid} />
  </>
)

const Info = ({ date, time }: PostInfo) => {
  return (
    <StyledInfo>
      {date} - {time} min read
    </StyledInfo>
  )
}

interface CommentsProps {
  title: string
  identifier: number
  url: string
}

const Comments = ({ title, identifier, url }: CommentsProps) => {
  const disqusShortName = 'https-glweems-com'
  const disqusConfig = {
    url,
    identifier: String(identifier),
    title
  }
  return <DiscussionEmbed key="Diqus" shortname={disqusShortName} config={disqusConfig} />
}

export default function BlogTemplate({ data: { post, prev, next } }: Props) {
  const { theme } = useContext(ThemeContext)
  const { title, path, tags } = post.frontmatter
  const url = `https://glweems.com${path}`

  const prevPath = prev && prev.frontmatter.path
  const nextPath = next && next.frontmatter.path
  const shareConfig = {
    url,
    twitterHandle: 'garrettlweems',
    title,
    tags
  }
  return [
    <SEO key="SEO" title={title} keywords={tags} description={post.excerpt} />,
    <Article key="Article" className={theme.mode}>
      <PostHeader frontmatter={post.frontmatter} timeToRead={post.timeToRead} />
      <Content elements={post.htmlAst} />
      <SwitchPages prev={prevPath} next={nextPath} />
      <ShareButtons {...shareConfig} />
      <Comments title={title} identifier={post.frontmatter.id} url={url} />
    </Article>
  ]
}

export const BlogTemplateQuery = graphql`
  query BlogTemplateQuery($slug: String!, $prev: String, $next: String) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      htmlAst
      timeToRead
      ...Frontmatter
    }
    prev: markdownRemark(frontmatter: { path: { eq: $prev } }) {
      frontmatter {
        path
      }
    }
    next: markdownRemark(frontmatter: { path: { eq: $next } }) {
      frontmatter {
        path
      }
    }
  }
`
