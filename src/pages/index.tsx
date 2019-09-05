/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Link, Container } from '../components/Common';
import SideProjects from '../components/SideProjects';
import Designs from '../components/Designs';
import Posts from '../components/Posts';
import Landing from '../components/Landing';

const IndexPage = () => [
  <Landing />,
  <Container>
    <section className="Tutorials">
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
  </Container>,
];

export default IndexPage;
