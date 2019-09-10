import React from 'react';
import Designs from '../components/Designs';
import { Container } from '../components/Common';
import { HeaderContext } from '../components/Providers';

export default () => {
  const { noHeader } = React.useContext(HeaderContext);
  noHeader();
  return (
    <Container>
      <h1>Graphic Design Projects</h1>
      <Designs />
    </Container>
  );
};
