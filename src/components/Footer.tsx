import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { email, socialMedia } from '../utils/data';

const Footer = () => (
  <footer>
    <div className="container">
      <section>
        <h4>Contact</h4>
        <ul>
          <li>
            <p>Garrett Weems</p>
          </li>
          <li>
            <a href={email.link}>
              <FontAwesomeIcon icon={email.icon} />
              <span>{email.name}</span>
            </a>
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h4>Social Media</h4>
        <ul>
          {socialMedia.map(({ name, link, icon, color }) => (
            <li key={name}>
              <a href={link} target="_blank_">
                <FontAwesomeIcon icon={icon} color={color === '#333' ? '#f7f7f7' : color} />
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
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
    </div>
  </footer>
);

export default Footer;
