import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Card from '../components/Card'
import Box from '../components/Common/Box'
import Pager from '../components/Pager'
import SEO from '../components/SEO'
import { DesignListQuery } from '../queries'
import { breakpoints } from '../theme'
import { PageContext } from './BlogPostListTemplate'

export default function ArticleListTemplate({
  data,
  pageContext,
}: PageProps<DesignListQuery, PageContext>) {
  const { designs } = data
  return (
    <Box container>
      <SEO
        title={`Designs Results ${pageContext.pageNumber} of ${pageContext.numberOfPages}`}
      />
      {designs.nodes.map(({ name, ...design }, index) => {
        return (
          <Card
            key={design.slug}
            path={`/design/${design.slug}`}
            subtitle={design.description}
            title={name}
            Image={
              <Img
                draggable={false}
                alt={`${name} thumbnail image`}
                fixed={design.fields.thumbnail.childImageSharp.fixed}
              />
            }
          />
        )
      })}
      <Pager {...pageContext} />
    </Box>
  )
}

export const DesignList = graphql`
  query DesignList($skip: Int!, $limit: Int!) {
    designs: allDesignsYaml(
      skip: $skip
      limit: $limit
      sort: { fields: slug, order: ASC }
    ) {
      nodes {
        ...DesignCard
      }
    }
  }
`
