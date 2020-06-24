import { graphql, navigate, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Article from '../components/Article';
import { DesignListQuery } from '../types/generated';
import { PageContext } from './BlogListTemplate';

export default function ArticleListTemplate(props: PageProps<DesignListQuery, PageContext>) {
  const handleClick: React.MouseEventHandler<{ name: string }> = (event) => {
    navigate(event.currentTarget.name);
  };

  const { previousPagePath, nextPagePath } = props.pageContext;
  return (
    <div>
      {props.data.allDesignsYaml.nodes.map(({ name, ...post }, index) => {
        return (
          <div key={name}>
            <Article
              title={name}
              Image={
                <Img
                  draggable={false}
                  alt={`${name} thumbnail image`}
                  fluid={props.data.allFile.nodes[index].childImageSharp.fluid}
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
  query DesignLit($skip: Int!, $limit: Int!) {
    allDesignsYaml(skip: $skip, limit: $limit, sort: { fields: slug, order: ASC }) {
      nodes {
        name
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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
