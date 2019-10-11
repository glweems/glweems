import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'
import SEO from '../../components/SEO'
import { MDX, Frontmatter } from '../..'
import { Article, Header, StyledInfo } from './BlogStyles'
import { ThemeContext } from '../../components/Providers'
import Tags from '../../components/Tags'
import SwitchPages from '../../components/SwitchPages'
import Share from '../../components/Share'

interface Props {
  data: {
    post: MDX
    prev: { frontmatter: { path: string | null } }
    next: { frontmatter: { path: string | null } }
  }
}

interface PostInfo {
  date: Date | string | any
  time: number
}

const PostHeader = ({ frontmatter, timeToRead }: { frontmatter: Frontmatter; timeToRead: number }) => (
  <>
    <Header>
      <h1 className="title">{frontmatter.title}</h1>
      <h2 className="subtitle">{frontmatter.subtitle}</h2>
      <div className="info">
        <Tags items={frontmatter.tags} />
        <Info date={frontmatter.date} time={timeToRead} />
      </div>
      <Share />
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
  path: string
}

const Comments = ({ title, identifier, path }: CommentsProps) => {
  const disqusShortName = 'https-glweems-com'
  const disqusConfig = {
    url: `https://glweems.com${path}`,
    identifier: String(identifier),
    title
  }
  return <DiscussionEmbed key="Diqus" shortname={disqusShortName} config={disqusConfig} />
}

export default function BlogTemplate({ data: { post, prev, next } }: Props) {
  const { theme } = useContext(ThemeContext)
  const prevPath = prev && prev.frontmatter.path
  const nextPath = next && next.frontmatter.path
  return [
    <SEO key="SEO" title={post.frontmatter.title} keywords={post.frontmatter.tags} description={post.excerpt} />,
    <Article key="Article" className={theme.mode}>
      <PostHeader frontmatter={post.frontmatter} timeToRead={post.timeToRead} />
      <MDXRenderer>{post.body}</MDXRenderer>
      <SwitchPages prev={prevPath} next={nextPath} />
      <Comments title={post.frontmatter.title} identifier={post.frontmatter.id} path={post.frontmatter.path} />
    </Article>
  ]
}

export const BlogTemplateQuery = graphql`
  query BlogTemplateQuery($slug: String!, $prev: String, $next: String) {
    post: mdx(frontmatter: { path: { eq: $slug } }) {
      body
      timeToRead
      ...Frontmatter
    }
    prev: mdx(frontmatter: { path: { eq: $prev } }) {
      frontmatter {
        path
      }
    }
    next: mdx(frontmatter: { path: { eq: $next } }) {
      frontmatter {
        path
      }
    }
  }
`
