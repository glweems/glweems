import React from 'react';
import Layout from '@/layout';
import SEO from '@/seo';
import Hello from '@/hello';
import About from '@/about';
import Repos from '@/repos';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hello />
    <About />
    <Repos />
  </Layout>
);

export default IndexPage;
