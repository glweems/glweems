import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Card from '../components/Card';
import Container from '../components/Common/Container';
import Pager from '../components/Pager';
import SEO from '../components/SEO';
import { DesignListQuery } from '../queries';
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
      <Container>
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
                  {...data.allFile.nodes[index].childImageSharp}
                />
              }
            />
          );
        })}
      </Container>
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
          fixed(
            width: 200
            height: 200
            traceSVG: { color: "#d0c1fa", background: "transparent" }
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;
