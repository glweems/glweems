// tslint:disable-next-line: quotemark
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'

interface Props {
  title: string
  description: string
  lang: string
  meta: any[]
  keywords: any[]
}

export default function SEO({
  title,
  description,
  lang,
  meta,
  keywords
}: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  )
}
