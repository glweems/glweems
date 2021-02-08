import loadable from '@loadable/component'
import { graphql, Link, navigate, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
// import React from 'react'
import styled from 'styled-components'
import Note from '../components/ Note'
import { Article } from '../components/Article'
import Box from '../components/Common/Box'
import Pod from '../components/Pod'
// import Heatmap from '../components/Heatmap'
import { IndexPageQuery } from '../queries'
const Heatmap = loadable(() => import('../components/Heatmap'))

export default function IndexPage({ data }: PageProps<IndexPageQuery>) {
  const handleImgClick: React.MouseEventHandler = (event) => {
    navigate(event.currentTarget.id)
  }
  return (
    <React.Fragment>
      <Note as="section">
        <h2 className="title">Blog Posts</h2>
        {data.posts.nodes.map(({ childMarkdownRemark: { info, id } }) => (
          <Article key={id}>
            <Link className="tbn" to={`/blog${info.path}/`}>
              <Img
                draggable={false}
                fixed={info.thumbnail.childImageSharp.fixed}
              />
            </Link>
            <Link to={`/blog${info.path}/`}>
              <h3 className="title">{info.title}</h3>
              <time>{info.date}</time>
              <p>{info.subtitle}</p>
            </Link>
          </Article>
        ))}
      </Note>

      <Note as="section">
        <h2 className="title">
          <Link to="/designs">Design</Link>
        </h2>

        {data.designs.nodes.map((design, index) => (
          <Article key={design.slug}>
            <Link className="tbn" to={`/design/${design.slug}`}>
              <Img
                draggable={false}
                alt={`${design.name} thumbnail image`}
                fixed={design.fields.thumbnail.childImageSharp.fixed}
              />
            </Link>

            <Link to={`/design/${design.slug}`}>
              <h3>{design.name}</h3>
              <p>{design.description}</p>
            </Link>
          </Article>
        ))}
      </Note>

      <Note as="section">
        <h2>Side Projects</h2>
        {data.allGithubPinneditems.nodes.map((pinned) => (
          <Article key={pinned.homepageUrl}>
            <Link to={pinned.url}>
              <h3>{pinned.name}</h3>
              <time>{pinned.createdAt}</time>
              <p>{pinned.description}</p>
            </Link>
            <Link className="tbn" to={pinned.homepageUrl}>
              <Img
                draggable={false}
                alt={`${pinned.name} thumbnail image`}
                fixed={pinned.thumbnail.childImageSharp.fixed}
              />
            </Link>
          </Article>
        ))}
      </Note>

      <Pod>
        <div style={{ backgroundColor: '#fff', border: '4px solid' }}>
          <Heatmap />
        </div>
      </Pod>
    </React.Fragment>
  )
}

const Section = styled(Box)``

;(Section as any).defaultProps = { as: 'section', container: true, p: 2, my: 2 }

export const Query = graphql`
  query IndexPage($limit: Int = 3) {
    posts: allFile(
      limit: $limit
      filter: { sourceInstanceName: { eq: "posts" }, extension: { eq: "md" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        childMarkdownRemark {
          ...BlogPostCard
        }
      }
    }

    designs: allDesignsYaml(limit: $limit, sort: { fields: slug, order: ASC }) {
      nodes {
        ...DesignCard
      }
    }

    allGithubPinneditems(limit: $limit) {
      nodes {
        ...GithubCard
      }
    }
  }
`
