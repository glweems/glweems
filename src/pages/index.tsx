/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
import ReactTooltip from 'react-tooltip'
import GithubCalendar from 'react-github-calendar'
import styled from 'styled-components'
import { Link, Container } from '../components/Common'
import SideProjects from '../components/SideProjects'
import Designs from '../components/Designs'
import Posts from '../components/Posts'
import { primary } from '../theme'

const FadedTitle = styled.h2`
  color: ${primary};
  font-size: 2em;
  opacity: 0.5;
`

const IndexPage = () => (
  <>
    <Container key="Blog">
      <section>
        <FadedTitle>Blog Posts</FadedTitle>
        <Posts limit={3} />
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

export default IndexPage
