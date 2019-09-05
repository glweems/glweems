import React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { Container, SocialIcon, OutboundLink } from './Common';
import { accounts } from '../utils/data';

const Footer = () => (
  <footer>
    <Container>
      <section>
        <h4>Contact</h4>
        <p>Garrett Weems</p>
        <div>
          <OutboundLink href={accounts.email.link} target="_blank_">
            <span>
              <FaIcon icon={accounts.email.icon} />{' '}
            </span>
            <span>{accounts.email.username} </span>
          </OutboundLink>
        </div>
      </section>
      <hr />
      <section>
        <h4>Find Me On The Web</h4>
        <div>
          <SocialIcon size="2x" account={accounts.github} />
          <SocialIcon size="2x" account={accounts.linkedin} />
          <SocialIcon size="2x" account={accounts.medium} />
          <SocialIcon size="2x" account={accounts.instagram} />
          <SocialIcon size="2x" account={accounts.behance} />
        </div>
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
