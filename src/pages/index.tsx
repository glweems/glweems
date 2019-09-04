/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Link } from '../components/Common';
import SideProjects from '../components/SideProjects';
import Designs from '../components/Designs';
import Posts from '../components/Posts';
import Landing from '../components/Landing';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    [main-start] minmax(0, 60em) [main-end]
    minmax(1em, 1fr) [full-end];
  > * {
    grid-column: main;
  }
`;

const IndexPage = () => [
  <Landing />,
  <Wrapper>
    <section className="Tutorials ">
      <h2>Blog Posts</h2>
      <Posts limit={3} />
      <div className="link">
        <Link to="/blog">View All Blog Posts</Link>
      </div>
    </section>

    <section className="Designs ">
      <h2>Design Projects</h2>
      <Designs limit={3} />
      <div className="link">
        <Link to="/designs">View All Designs</Link>
      </div>
    </section>

    <section className="Websites ">
      <h2>Side Projects</h2>
      <SideProjects limit={3} />
    </section>
  </Wrapper>,
];

export default IndexPage;
