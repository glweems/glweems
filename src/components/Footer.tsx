import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialMediaIcons from './SocialMedia';
import { email, socialMedia } from '../utils/data';
import Flex from './Flex';

const Styles = styled.footer`
  width: 100%;
  background: ${props => props.theme.lightColors.dark};
  /* color: ${props => props.theme.darkColors.bg}; */
  margin: 0;
  padding: 1.5em 0;
  h4 {
    /* color: ${props => props.theme.colors.dark}; */
    padding-bottom: 0.25em;
    margin-bottom: 0.75em;
    /* border-bottom: 1px solid black; */
  }

  svg {
    /* color: ${props => props.theme.colors.light}; */
  }

  ul {
    margin:0;
    list-style: none;
    li {
      text-align: left;
      margin: 0;
      a {
        color: ${props => props.theme.colors.light};
        :hover {
          /* color: ${props => props.theme.colors.purple}; */
        }
      }
      small {
        /* color: ${props => props.theme.darkColors.bg}; */
      }
      span {
        margin-left: 0.75em;
      }
    }
  }
`;

const Copyright = styled.div`
  width: 100%;
  background: ${props => props.theme.darkColors.bg};
  padding: 0.5em;
  margin-bottom: 0;
  /* text-align: center; */
  .built {
    display: flex;
    justify-content: space-between;
  }
`;

const Footer = () => (
  <>
    <Styles>
      <Container>
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
        <br />
        <hr />
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
      </Container>
    </Styles>
    <Copyright>
      <Flex direction="column">
        <small>
          Proudly build with
          <div className="built">
            <div>styled-components</div>
            <div>react</div>
            <div>gatsby</div>
            <div>typescript</div>
            <div>styled-components</div>
          </div>
        </small>
      </Flex>
    </Copyright>
  </>
);

export default Footer;
