/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import GithubCalendar from 'react-github-calendar';
import { Link, Container, Button } from '../components/Common';
import SideProjects from '../components/SideProjects';
import Designs from '../components/Designs';
import Posts from '../components/Posts';

const IndexPage = () => [
  <Container key="Blog">
    <section>
      <h2>Blog Posts</h2>
      <Posts limit={3} />
    </section>
    <div>
      <Link to="/blog" unstyled>
        View All Blog Posts
      </Link>
    </div>
  </Container>,
  <Container key="Design">
    <section>
      <h2>Design Projects</h2>
      <Designs limit={3} />
    </section>
    <Link to="/designs" unstyled>
      <Button>View All Designs</Button>
    </Link>
  </Container>,
  <Container key="Projects">
    <section>
      <h2>Side Projects</h2>
      <SideProjects limit={3} />
    </section>
  </Container>,
  <Container key="github-callendar">
    <GithubCalendar username="glweems" years={[2019]}>
      <ReactTooltip delayShow={35} html />
    </GithubCalendar>
  </Container>,
];

export default IndexPage;
