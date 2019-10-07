import React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Container, Link } from './Common';
import { accounts } from '../utils/data';

const { github, linkedin, medium, instagram, behance } = accounts;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => (
  <footer>
    <Container>
      <section>
        <h4>Contact</h4>
        <p>Garrett Weems</p>
        <div>
          <Link to={accounts.email.link}>
            <span>
              <FaIcon icon={accounts.email.icon} />{' '}
            </span>
            <span>{accounts.email.username} </span>
          </Link>
        </div>
      </section>
      <hr />
      <section>
        <h4>Find Me On The Web</h4>
        <Flex>
          <Link to={github.link}>{github.name}</Link>
          <Link to={linkedin.link}>{linkedin.name}</Link>
          <Link to={medium.link}>{medium.name}</Link>
          <Link to={instagram.link}>{instagram.name}</Link>
          <Link to={behance.link}>{behance.name}</Link>
        </Flex>
      </section>
      <hr />
      <section>
        <h4>Proudly built with</h4>
        <ul>
          <li>react</li>
          <li>gatsby</li>
          <li>typescript</li>
          <li>styled-components</li>
        </ul>
      </section>
    </Container>
  </footer>
);

export default Footer;
