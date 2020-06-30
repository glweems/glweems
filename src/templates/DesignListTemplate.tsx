import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Article from '../components/Article';
import Pager from '../components/Pager';
import SEO from '../components/SEO';
import { DesignListQuery } from '../types/generated';
import { PageContext } from './BlogListTemplate';
import Layout from '../layout/Layout';

export default function ArticleListTemplate({
  data,
  pageContext,
}: PageProps<DesignListQuery, PageContext>) {
  return (
    <Layout>
      <SEO
        title={`Designs Results ${pageContext.pageNumber} of ${pageContext.numberOfPages}`}
      />
      <main>
        {data.allDesignsYaml.nodes.map(({ name, ...post }, index) => {
          return (
            <Article
              key={post.slug}
              path={`/design/${post.slug}`}
              excerpt={post.description}
              title={name}
              Image={
                <Img
                  draggable={false}
                  alt={`${name} thumbnail image`}
                  fixed={data.allFile.nodes[index].childImageSharp.fixed}
                />
              }
            />
          );
        })}
        <Pager {...pageContext} />
      </main>
    </Layout>
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
        name
        description
        slug
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
            height: 200
            width: 200
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
