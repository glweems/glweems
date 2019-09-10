/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Link, Container } from '../components/Common';
import SideProjects from '../components/SideProjects';
import Designs from '../components/Designs';
import Posts from '../components/Posts';
import Landing from '../components/Landing';
import { HeaderContext } from '../components/Providers';

const IndexPage = () => {
  const { setHeader } = React.useContext(HeaderContext);
  React.useEffect(() => {
    setHeader(<Landing />);
  }, [setHeader]);

  return (
    <Container key="Content">
      <section>
        <h2>Blog Posts</h2>
        <Posts limit={3} />
        <Link to="/blog">View All Blog Posts</Link>
      </section>

      <section>
        <h2>Design Projects</h2>
        <Designs limit={3} />
        <Link to="/designs">View All Designs</Link>
      </section>

      <section>
        <h2>Side Projects</h2>
        <SideProjects limit={3} />
      </section>
    </Container>
  );
};

export default IndexPage;
