import loadable from '@loadable/component'
import { graphql, Link, navigate, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
// import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Box from '../components/Common/Box'
import Paper from '../components/Common/Paper'
// import Heatmap from '../components/Heatmap'
import { IndexPageQuery } from '../queries'
import { breakpoints } from '../theme'
// import LoadingSpinner from '../components/LoadingSpinner'
import pMinDelay from 'p-min-delay'
// const Heatmap = React.lazy(() => import('../components/Heatmap'))
import IntersectionObserver from '../components/IntersectionObserver'
import { Article } from '../components/Article'
const Heatmap = loadable(() => import('../components/Heatmap'))

export default function IndexPage({ data }: PageProps<IndexPageQuery>) {
  const handleImgClick: React.MouseEventHandler = (event) => {
    navigate(event.currentTarget.id)
  }
  return (
    <React.Fragment>
      <section className="paper">
        <h2 className="title">Blog Posts</h2>
        {data.posts.nodes.map(({ childMarkdownRemark: { info, id } }) => {
          return (
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
          )
        })}
      </section>

      <section className="paper">
        <h2 className="title">Design</h2>

        {data.designs.nodes.map((design, index) => {
          return (
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
            /*     <Card
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
            /> */
          )
        })}
      </section>

      <section className="paper">
        <h2 className="title">Side Projects</h2>
        {data.allGithubPinneditems.nodes.map((pinned) => {
          console.log('pinned: ', pinned)
          return (
            <Article key={pinned.homepageUrl}>
              <Link className="tbn" to={pinned.homepageUrl}>
                <Img
                  draggable={false}
                  alt={`${pinned.name} thumbnail image`}
                  fixed={pinned.thumbnail.childImageSharp.fixed}
                />
              </Link>

              <Link to={pinned.url}>
                <h3>{pinned.name}</h3>
                <time>{pinned.createdAt}</time>
                <p>{pinned.description}</p>
              </Link>
            </Article>
            /*  <Card
              key={pinned.id}
              title={pinned.name}
              subtitle={pinned.description}
              date={pinned.createdAt}
              path={pinned.homepageUrl}
              Image={
                <Img
                  draggable={false}
                  alt={`${pinned.name} thumbnail image`}
                  fixed={pinned.thumbnail.childImageSharp.fixed}
                  className="tbn"
                />
              }
            ></Card> */
          )
        })}
      </section>

      <Box container className="profile">
        <Heatmap />
      </Box>
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
