/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Link, Container, Button } from '../components/Common';
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

  return [
    <Container key="Blog">
      <section>
        <h2>Blog Posts</h2>
        <Posts limit={3} />
      </section>
      <Link to="/blog">
        <Button>View All Blog Posts</Button>
      </Link>
    </Container>,

    <Container key="Design">
      <section>
        <h2>Design Projects</h2>
        <Designs limit={3} />
      </section>
      <Link to="/designs">
        <Button>View All Designs</Button>
      </Link>
    </Container>,

    <Container key="Projects">
      <section>
        <h2>Side Projects</h2>
        <SideProjects limit={3} />
      </section>
    </Container>,
  ];
};

export default IndexPage;
