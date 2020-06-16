import React from 'react';
import { Container } from '../components/Common';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>Page not found</h1>
      <p>The requested page is unavailable.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
