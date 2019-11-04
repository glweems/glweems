/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import ReactTooltip from 'react-tooltip'
import GithubCalendar from 'react-github-calendar'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link, Container, Divider, Button } from '../components/Common'
import SideProjects from '../components/SideProjects'
import Designs from '../components/Designs'
import { BlogPosts } from '../components/BlogPosts'
import { primary, media, text } from '../theme'
import { BlogPost, Nodes, BehanceProject, ImageFile } from '..'
import { rhythm } from '../utils/typography'
import useDesigns from '../graphql/DesignsQuery'
import { mapDesignCovers } from '../utils/helpers'
const FadedTitle = styled.h2`
  color: ${primary};
  font-size: 2em;
  opacity: 0.5;
`
interface Props {
  data: {
    allMarkdownRemark: {
      posts: BlogPost[]
    }
    allBehanceProjects: Nodes<BehanceProject>
    allFile: Nodes<ImageFile>
  }
}

export const IndexMain = styled.main`
  section {
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: ${rhythm(1)};
    a {
      color: ${text};
      text-decoration: none;
    }
  }
`

const IndexPage: React.FC<Props> = ({ data }) => {
  const {
    allMarkdownRemark: { posts },
    allBehanceProjects,
    allFile
  } = data
  const designs = mapDesignCovers({ allBehanceProjects, allFile })

  return (
    <Container className="wrapper">
      <section className="blog">
        <h2>
          <Link to="/blog">Blog Posts</Link>
        </h2>
        <BlogPosts posts={posts} />
        <Button>
          <Link to="/blog" unstyled>
            View All Blog Posts
          </Link>
        </Button>
      </section>

      <Divider />

      <section>
        <FadedTitle>Design Projects</FadedTitle>
        <Designs designs={designs} />
        <Button>
          <Link to="/designs" unstyled>
            View All Designs
          </Link>
        </Button>
      </section>

      <Divider />

      <section>
        <FadedTitle>Side Projects</FadedTitle>
        <SideProjects limit={2} />
      </section>

      <section>
        <GithubCalendar username="glweems" years={[2019]}>
          <ReactTooltip delayShow={35} html />
        </GithubCalendar>
      </section>
    </Container>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        ...BlogPost
      }
    }
    allBehanceProjects(limit: 3, sort: { fields: stats___views, order: DESC }) {
      nodes {
        slug
        name
        description
        tags
        published_on
      }
    }
    allFile(filter: { relativeDirectory: { regex: "/gatsby-source-behance-images/" }, name: { eq: "cover" } }) {
      nodes {
        id
        name
        relativeDirectory
        childImageSharp {
          ...FluidImage
        }
      }
    }
  }
`
