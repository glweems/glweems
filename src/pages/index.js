import About from '@/about';
import { Hello, Layout, SEO } from 'my-components';
import PinnedRepos from '@/github';
import { Container } from 'reactstrap';
import React from 'react';

export default () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`glweems`, `garrett`, `weems`, `portfolio`, `developer`]}
    />
    <Hello />
    <Container>
      <About />
      <PinnedRepos />
    </Container>
  </Layout>
);
