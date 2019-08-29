/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import GithubCalendar from 'react-github-calendar';
import Avatar from './Avatar';
import SocialMediaIcons from './SocialMedia';
import { heatMapTheme } from '../utils/theme';

const Content = styled.div`
  .img {
    margin-bottom: 3em;
  }

  h1 {
    color: ${props => props.theme.colors.light};
  }

  h3 {
    margin-bottom: 3em;
    color: ${props => props.theme.colors.muted};
  }

  .icons {
    margin-bottom: 3em;
  }

  .map {
    margin-bottom: 3em;
  }

  .react-github-calendar__title {
    display: none;
  }
`;

const About = () => (
  <Content className="container">
    <div className="img">
      <Avatar />
    </div>
    <h1>
      Hello, I'm <span> Garrett Weems</span>.
    </h1>
    <h3>I'm a full-stack web developer.</h3>
    <div className="map">
      <GithubCalendar username="glweems" years={[2019]} theme={heatMapTheme} />
    </div>
    <div className="icons">
      <SocialMediaIcons show="icon" />
    </div>
  </Content>
);

export default About;
