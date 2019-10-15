import * as React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Frontmatter } from '../..'
import SEO from '../../components/SEO'
import { Article } from './styles'
import { ThemeContext } from '../../components/Providers'
import { SwitchPages, PostDirection } from './SwitchPages'
import { Header, ShareButtons, Content, Comments } from './components'

interface Post {
  id: string
  timeToRead: number
  excerpt: string
  htmlAst: object
  frontmatter: Frontmatter
  url: string
  disqusIdentifier: string
}

interface Props {
  data: {
    post: Post
    prev: PostDirection
    next: PostDirection
    site: { siteMetadata: { twitterHandle: string; disqusShortName: string } }
  }
}

const BlogTemplate: React.FC<Props> = ({ data: { post, prev, next, site } }) => {
  const { theme } = React.useContext(ThemeContext)
  const { twitterHandle, disqusShortName } = site.siteMetadata
  const { url, disqusIdentifier } = post
  const { title, path, tags, subtitle: description, thumbnail } = post.frontmatter
  const seoConfig = { title, path, tags, description, article: true, image: thumbnail.publicUrl }
  const shareConfig = { url, twitterHandle, title, tags }
  const disqusConfig = { disqusShortName, identifier: disqusIdentifier, url, title }

  return (
    <>
      <SEO config={seoConfig} />
      <Article className={theme.mode}>
        <Header frontmatter={post.frontmatter} timeToRead={post.timeToRead} />
        <Img className="thumbnail" fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
        <Content elements={post.htmlAst} />
        <SwitchPages config={{ prev, next }} />
        <ShareButtons config={shareConfig} />
        <Comments config={disqusConfig} />
      </Article>
    </>
  )
}

export default BlogTemplate

export const BlogTemplateQuery = graphql`
  query BlogTemplateQuery($slug: String!, $prev: String, $next: String) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      url
      disqusIdentifier
      timeToRead
      htmlAst
      ...Frontmatter
    }
    prev: markdownRemark(frontmatter: { path: { eq: $prev } }) {
      frontmatter {
        title: subtitle
        path
      }
    }
    next: markdownRemark(frontmatter: { path: { eq: $next } }) {
      frontmatter {
        title: subtitle
        path
      }
    }
    site {
      siteMetadata {
        twitterHandle
        disqusShortName
      }
    }
  }
`
