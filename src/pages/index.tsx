/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import ReactTooltip from 'react-tooltip'
import GithubCalendar from 'react-github-calendar'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link, Container } from '../components/Common'
import SideProjects from '../components/SideProjects'
import Designs from '../components/Designs'
import Posts from '../components/Posts'
import { primary } from '../theme'
import { BlogPost } from '..'

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
  }
}
const IndexPage: React.FC<Props> = ({ data }) => {
  const { posts } = data.allMarkdownRemark
  return (
    <>
      <Container justifyContent="">
        <section>
          <FadedTitle>Blog Posts</FadedTitle>
          <Posts posts={posts} />
        </section>
        <div>
          <Link to="/blog">View All Blog Posts</Link>
        </div>
      </Container>

      <Container key="Design">
        <section>
          <FadedTitle>Design Projects</FadedTitle>
          <Designs limit={3} />
        </section>
        <div>
          <Link to="/designs">View All Designs</Link>
        </div>
      </Container>

      <Container key="Projects">
        <section>
          <FadedTitle>Side Projects</FadedTitle>
          <SideProjects limit={2} />
        </section>
      </Container>

      <GithubCalendar username="glweems" years={[2019]}>
        <ReactTooltip delayShow={35} html />
      </GithubCalendar>
    </>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        id
        excerpt
        ...Frontmatter
      }
    }
  }
`
