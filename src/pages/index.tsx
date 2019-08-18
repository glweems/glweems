/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import About from '../components/About';
import Websites from '../components/Websites';
import Designs from '../components/Designs';
import Tutorials from '../components/Tutorials';
import CardTrail from '../components/CardTrail';

const Content = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto 1fr;
  grid-template-areas:
    'Tutorials'
    'Designs'
    'Websites';
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
        <CardTrail cards={Tutorials({ limit: 3 })} delay={1000} />
        <div className="link">
          <Link to="/tutorials">View All Tutorials</Link>
        </div>
      </section>

      <section className="Designs container">
        <h2>Design Projects</h2>
        <CardTrail cards={Designs({ limit: 3 })} delay={2000} />
        <div className="link">
          <Link to="/designs">View All Designs</Link>
        </div>
      </section>

      <section className="Websites container">
        <h2>Side Projects</h2>
        <CardTrail cards={Websites({ limit: 3 })} delay={3000} />
      </section>
    </Content>
  </>
);

export default IndexPage;
