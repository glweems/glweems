/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import About from '../components/About';
import { Section } from '../utils/theme';
import Websites from '../components/Websites';
import Designs from '../components/Designs';
import Tutorials from '../components/Tutorials';

const Content = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto 1fr;
  grid-template-areas:
    'About'
    'Tutorials'
    'Designs';
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
`;

const IndexPage = () => (
  <Content>
    <Section>
      <Container>
        <About />
      </Container>
    </Section>

    <Section>
      <Container>
        <h2>Side Projects</h2>
        <Websites limit={3} />
      </Container>
    </Section>

    <Section>
      <Container>
        <h2>Blog Posts</h2>
        <Tutorials limit={3} />
      </Container>
    </Section>

    <Section>
      <Container>
        <h2>Design Projects</h2>
        <Designs limit={3} />
      </Container>
    </Section>
  </Content>
);

export default IndexPage;
