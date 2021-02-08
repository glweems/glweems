import { ErrorBoundary } from 'react-error-boundary'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import Box from '../components/Common/Box'
import DisqusComments from '../components/DisqusComments'
import HtmlAst from '../components/HtmlAst'
import SEO from '../components/SEO'
import ShareButtons from '../components/ShareButtons'
import Tags from '../components/Tags'
import { BlogTemplateQuery } from '../queries'
import { media } from '../theme'
import '../utils/syntax.css'
import Note from '../components/ Note'
export interface PageContext {
  slug: string
  prev: string
  next: string
}

export default function BlogTemplate({
  data,
  pageContext,
}: PageProps<BlogTemplateQuery, PageContext>) {
  const { post } = data
  const { frontmatter } = data.post

  return (
    <Fragment>
      <SEO
        article
        title={frontmatter.title}
        description={frontmatter.subtitle}
        keywords={frontmatter.tags}
        image={frontmatter.thumbnail.publicURL}
      />

      <Note>
        <header>
          <h1 className="blog-title">{frontmatter.title}</h1>

          <Img
            className="tbn"
            draggable={false}
            fluid={frontmatter.thumbnail.childImageSharp.fluid}
            alt={`${frontmatter.title} thumbnail`}
          />

          <p className="blog-subtitle">{frontmatter.subtitle}</p>

          <small className="date">
            {frontmatter.date} - {post.timeToRead} min read
          </small>

          <Tags tags={frontmatter.tags} />
        </header>
        <article>
          <HtmlAst elements={post.htmlAst} components={articleComponents} />
        </article>
      </Note>

      <ErrorBoundary
        FallbackComponent={(props) => <div>error loading comments</div>}
      >
        <Box container>
          <ShareButtons
            title={frontmatter.title}
            url={post.url}
            tags={frontmatter.tags}
          />
          <DisqusComments
            url={post.url}
            identifier={(post as any).disqusIdentifier}
            title={frontmatter.title}
          />
        </Box>
      </ErrorBoundary>
    </Fragment>
  )
}

const Styled = styled(Note)`
  .tbn {
    margin-bottom: ${({ theme }) => theme.space[5]};
  }

  blockquote,
  iframe,
  .gatsby-highlight {
    margin-right: -${({ theme }) => theme.space[5]};
    margin-left: -${({ theme }) => theme.space[5]};
  }

  ${media.greaterThan('sm')`
      /* padding: ${({ theme }) => theme.space[2]}; */
  `};
`

export const Query = graphql`
  query BlogTemplate($slug: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      url
      timeToRead
      htmlAst
      ...Frontmatter
      editOnGithub
    }
  }
`

const A = (props) => <OutboundLink {...props} />
A.displayName = 'Anchor'

const articleComponents = {
  em: styled.em`
    width: 100%;
    text-align: center;
  `,
  blockquote: styled.blockquote`
    padding: ${({ theme }) => theme.space[5]};
    color: ${({ theme }) => theme.colors.muted};
    font-style: italic;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
  `,
  ul: styled.ul`
    list-style-position: inside;
  `,
  a: A,
}
