import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { IndexPageQuery } from '../types/generated';
import Article from '../components/Article';
import Img from 'gatsby-image';

export default function IndexPage({ data }: PageProps<IndexPageQuery>) {
  return (
    <React.Fragment>
      <section>
        <h2>Blog Posts</h2>
        {data.posts.nodes.map(({ frontmatter, ...post }) => {
          return (
            <Article
              key={post.id}
              title={frontmatter.title}
              excerpt={post.excerpt}
              date={frontmatter.date}
              path={`/blog${frontmatter.path}`}
              Image={
                <Img
                  draggable={false}
                  alt={frontmatter.title}
                  fluid={frontmatter.thumbnail.childImageSharp.fluid}
                />
              }
            />
          );
        })}
      </section>

      <section>
        <h2>Designs</h2>

        {data.designs.nodes.map(({ name, ...design }, index) => {
          return (
            <Article
              key={design.slug}
              path={`/design/${design.slug}`}
              excerpt={design.description}
              title={name}
              Image={
                <Img
                  draggable={false}
                  alt={`${name} thumbnail image`}
                  fluid={data.designCovers.nodes[index].childImageSharp.fluid}
                />
              }
            />
          );
        })}
      </section>

      <section>
        {data.allGithubPinneditems.nodes.map((pinned) => (
          <Article
            title={pinned.name}
            excerpt={pinned.description}
            date={pinned.createdAt}
            Image={<img src={pinned.openGraphImageUrl} alt={pinned.name} />}
          />
        ))}
      </section>
    </React.Fragment>
  );
}

export const Query = graphql`
  query IndexPage($limit: Int = 3) {
    posts: allMarkdownRemark(limit: $limit) {
      nodes {
        ...BlogPostArticle
      }
    }

    designs: allDesignsYaml(limit: $limit, sort: { fields: slug, order: ASC }) {
      nodes {
        ...DesignArticle
      }
    }

    designCovers: allFile(
      limit: $limit
      filter: { sourceInstanceName: { eq: "designs" }, name: { eq: "cover" } }
      sort: { fields: relativeDirectory, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(
            traceSVG: { color: "#d0c1fa", background: "transparent" }
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }

    allGithubPinneditems(limit: $limit) {
      nodes {
        primaryLanguage {
          name
          color
        }
        openGraphImageUrl
        name
        url
        createdAt(formatString: "MMMM YYYY")
        description
        homepageUrl
        id
      }
    }
  }
`;
