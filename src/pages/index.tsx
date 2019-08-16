/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
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
    'About'
    'Tutorials'
    'Designs'
    'Websites';
  gap: 10em;
  margin-top: 1em;
  section:nth-child(1) {
    grid-area: About;
  }
  section:nth-child(2) {
    grid-area: Tutorials;
  }
  section:nth-child(3) {
    grid-area: Designs;
  }
  section:nth-child(4) {
    grid-area: Websites;
  }

  .link {
    margin-top: 1em;
  }
`;

const IndexPage = () => (
  <Content>
    <section>
      <Container>
        <About />
      </Container>
    </section>

    <section>
      <Container>
        <h2>Blog Posts</h2>
        <CardTrail cards={Tutorials({ limit: 3 })} delay={1000} />
        <div className="link">
          <Link to="/tutorials">View All Tutorials</Link>
        </div>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Design Projects</h2>
        <CardTrail cards={Designs({ limit: 3 })} delay={2000} />
        <div className="link">
          <Link to="/designs">View All Designs</Link>
        </div>
      </Container>
    </section>

    <section>
      <Container>
        <h2>Side Projects</h2>
        <CardTrail cards={Websites({ limit: 3 })} delay={3000} />
      </Container>
    </section>
  </Content>
);

export default IndexPage;
