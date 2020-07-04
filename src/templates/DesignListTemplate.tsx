import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Card from '../components/Card';
import Pager from '../components/Pager';
import SEO from '../components/SEO';
import { DesignListQuery } from '../types/generated';
import { PageContext } from './BlogPostListTemplate';

export default function ArticleListTemplate({
  data,
  pageContext,
}: PageProps<DesignListQuery, PageContext>) {
  return (
    <React.Fragment>
      <SEO
        title={`Designs Results ${pageContext.pageNumber} of ${pageContext.numberOfPages}`}
      />
      {data.allDesignsYaml.nodes.map(({ name, ...post }, index) => {
        return (
          <Card
            key={post.slug}
            path={`/design/${post.slug}`}
            excerpt={post.description}
            title={name}
            Image={
              <Img
                draggable={false}
                alt={`${name} thumbnail image`}
                fluid={data.allFile.nodes[index].childImageSharp.fluid}
              />
            }
          />
        );
      })}
      <Pager {...pageContext} />
    </React.Fragment>
  );
}

export const DesignList = graphql`
  query DesignList($skip: Int!, $limit: Int!) {
    allDesignsYaml(
      skip: $skip
      limit: $limit
      sort: { fields: slug, order: ASC }
    ) {
      nodes {
        ...DesignCard
      }
    }
    allFile(
      skip: $skip
      limit: $limit
      filter: { sourceInstanceName: { eq: "designs" }, name: { eq: "cover" } }
      sort: { fields: relativeDirectory, order: ASC }
    ) {
      nodes {
        relativeDirectory
        sourceInstanceName
        childImageSharp {
          fluid(
            traceSVG: {
              color: "#d0c1fa"
              background: "transparent"
              threshold: 10
            }
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;
