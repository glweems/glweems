import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { email, socialMedia } from '../utils/data';

interface ColorOptions {
  colors: {
    light: string;
    dark: string;
  };
}

const Li = styled.li<ColorOptions>`
  svg {
    color: ${props =>
      !props.theme.isDarkMode ? props.colors.dark : props.colors.light};
  }
`;

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
          {socialMedia.map(({ name, link, icon, colors }) => (
            <Li key={name} colors={colors}>
              <a href={link} target="_blank_">
                <FontAwesomeIcon icon={icon} />
                <span>{name}</span>
              </a>
            </Li>
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
