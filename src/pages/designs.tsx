import React from 'react';
import { Container } from '../components/Common';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import loadable from '@loadable/component';
const Designs = loadable(() => import('../components/Designs'), { fallback: <LoadingSpinner /> });

export default () => (
  <Container>
    <h1>Graphic Design Projects</h1>
    <Designs />
  </Container>
);
