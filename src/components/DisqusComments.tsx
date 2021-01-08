import loadable from '@loadable/component'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { DisqusQuery } from '../queries'
import LoadingSpinner from './Common/LoadingSpinner'

export interface DisqusConfig {
  url?: string
  identifier?: string
  title?: string
}
export interface DiscussionEmbedProps {
  shortname: string
  config: DisqusConfig
}
const DiscussionEmbed = loadable<DiscussionEmbedProps>(
  () => import('disqus-react').then((module) => module.DiscussionEmbed),
  { fallback: <LoadingSpinner /> }
)

export default function DisqusComments(props: DisqusConfig) {
  const { site } = useStaticQuery<DisqusQuery>(Query)
  return (
    <DiscussionEmbed
      shortname={site.siteMetadata.disqusShortName}
      config={props}
    />
  )
}

export const Query = graphql`
  query Disqus {
    site {
      siteMetadata {
        disqusShortName
      }
    }
  }
`
