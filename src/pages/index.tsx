/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import GithubCalendar from 'react-github-calendar';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Link, Container } from '../components/Common';
import SideProjects from '../components/SideProjects';
import Designs from '../components/Designs';
import { BlogPosts } from '../components/BlogPosts';
import { primary } from '../theme';
import { rhythm } from '../utils/typography';
import { IndexPageQuery } from './_types/IndexPageQuery';

const IndexPage = ({ data }: { data: IndexPageQuery }) => {
  const { posts } = data.allMarkdownRemark;
  return (
    <>
      <Container justifyContent="">
        <section className="blog">
          <FadedTitle>Blog Posts</FadedTitle>
          <BlogPosts posts={posts} />
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
  );
};

const FadedTitle = styled.h2`
  color: ${primary};
  font-size: 2em;
  opacity: 0.5;
`;

export const IndexMain = styled.main`
  .blog {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-rows: max-content;
    grid-template-columns: 1fr;
    gap: ${rhythm(3)} 0;
  }
`;
export default IndexPage;

export const Query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        ...BlogPost
      }
    }
  }
`;
