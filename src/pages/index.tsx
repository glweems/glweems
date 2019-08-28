/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import About from '../components/About';
import SideProjects from '../components/SideProjects';
import Designs from '../components/Designs';
import Posts from '../components/Posts';
import CardTrail from '../components/CardTrail';

const Content = styled.div`
  display: grid;
  grid-template-areas:
    'Tutorials'
    'Designs'
    'Websites';
  grid-template-rows: auto auto auto 1fr;
  grid-template-columns: auto;
  gap: 10em;
  margin-top: 1em;
  .Tutorials {
    grid-area: Tutorials;
  }
  .Designs {
    grid-area: Designs;
  }
  .Websites {
    grid-area: Websites;
  }

  .link {
    margin-top: 1em;
  }
`;

const IndexPage = () => (
  <>
    <About />
    <Content>
      <section className="Tutorials container">
        <h2>Blog Posts</h2>
        <Posts limit={3} />
        <div className="link">
          <Link to="/blog">View All Blog Posts</Link>
        </div>
      </section>

      <section className="Designs container">
        <h2>Design Projects</h2>
        <Designs limit={3} />
        <div className="link">
          <Link to="/designs">View All Designs</Link>
        </div>
      </section>

      <section className="Websites container">
        <h2>Side Projects</h2>
        <SideProjects limit={3} />
      </section>
    </Content>
  </>
);

export default IndexPage;
