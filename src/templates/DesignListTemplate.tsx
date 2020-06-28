import { graphql, navigate, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Article from '../components/Article';
import { DesignListQuery } from '../types/generated';
import { PageContext } from './BlogListTemplate';
import { motion } from 'framer-motion';

export default function ArticleListTemplate(props: PageProps<DesignListQuery, PageContext>) {
  const handleClick: React.MouseEventHandler<{ name: string }> = (event) => {
    navigate(event.currentTarget.name);
  };

  const { previousPagePath, nextPagePath } = props.pageContext;
  return (
    <div>
      {props.data.allDesignsYaml.nodes.map(({ name, ...post }, index) => {
        return (
          <div key={post.slug}>
            <Article
              path={'/' + post.slug}
              excerpt={post.description}
              title={name}
              Image={
                <Img
                  draggable={false}
                  alt={`${name} thumbnail image`}
                  fixed={props.data.allFile.nodes[index].childImageSharp.fixed}
                />
              }
            />
          </div>
        );
      })}

      <div
        css={`
          display: flex;
        `}
      >
        <button name={previousPagePath} disabled={previousPagePath === ''} onClick={handleClick}>
          Prev
        </button>
        <button name={nextPagePath} disabled={nextPagePath === ''} onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export const DesignList = graphql`
  query DesignList($skip: Int!, $limit: Int!) {
    allDesignsYaml(skip: $skip, limit: $limit, sort: { fields: slug, order: ASC }) {
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
          fixed(height: 200, width: 200, traceSVG: { color: "#d0c1fa", background: "transparent" }, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;
