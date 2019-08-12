/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReactTooltip from 'react-tooltip';
import GithubCalendar from 'react-github-calendar';
import animated from 'react-spring';
import Avitar from './Avitar';
import { AnimatedSociaMedia } from './SocialMedia';
import { heatMapTheme } from '../utils/theme';
import Flex from './Flex';

// Create the keyframes
const rotate = keyframes`
    from  { transform: translateX(-50px); }
    to { transform: translateX(100vw);}
`;

const Content = styled.div`
  max-width: 100vw;
  overflow: hidden;
  height: 50vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  gap: 0 2em;
  align-items: flex-start;
  align-content: space-between;
  grid-template-areas:
    'Ghost'
    'Message'
    'SocialMedia'
    'HeatMap';

  .Message {
    grid-area: Message;
    margin: 0;
    h1 {
      color: ${props => props.theme.colors.muted};
      margin-bottom: 0;
      span {
        color: ${props => props.theme.colors.yellow};
      }
      h3 {
        color: ${props => props.theme.colors.muted};
      }
    }
  }

  .Ghost {
    grid-area: Ghost;

    .img {
      animation: ${rotate} 4s ease-in-out infinite;
    }
  }

  .SocialMedia {
    grid-area: SocialMedia;
    margin: 0;
  }
  .HeatMap {
    grid-area: HeatMap;
  }

  .react-github-calendar__title {
    display: none;
  }
`;

const About = () => (
  <Content>
    <div className="Message">
      <h1>
        Hello, I'm <span> Garrett Weems</span>.
      </h1>
      <h3>I'm a full-stack web developer.</h3>
    </div>

    <div className="Ghost">
      <div className="img">
        <Avitar />
      </div>
    </div>

    <div className="SocialMedia">
      <AnimatedSociaMedia delay={1500} />
    </div>

    <div className="HeatMap">
      <GithubCalendar username="glweems" years={[2019]} theme={heatMapTheme}>
        <ReactTooltip />
      </GithubCalendar>
    </div>
  </Content>
);

export default About;
