import React from 'react';
import Posts from '../components/Posts';
import { Container } from '../components/Common';
import { HeaderContext } from '../components/Providers';

export default () => {
  const { noHeader } = React.useContext(HeaderContext);
  noHeader();
  return (
    <Container>
      <h1>Blog Posts</h1>
      <Posts />
    </Container>
  );
};
