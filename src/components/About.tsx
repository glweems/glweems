/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import GithubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import Avitar from './Avitar';
import SocialMediaIcons from './SocialMedia';
import { media, heatMapTheme, H1, H3, Span, Section, P } from '../utils/theme';

// Create the keyframes
const rotate = keyframes`
    from  {transform: translateX(-50px); }
    to {transform: translateX(100vw);}
`;

const Content = styled(Section)`
  max-width: 100vw;
  overflow: hidden;
  height: 80vh;
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

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <Content style={props}>
      <div className="Message">
        <H1 color="muted">
          Hello, I'm <Span color="yellow"> Garrett Weems</Span>.
        </H1>
        <H3 color="muted">I'm a full-stack web developer.</H3>
      </div>

      <div className="Ghost">
        <div className="img">
          <Avitar />
        </div>
      </div>

      <div className="SocialMedia">
        <SocialMediaIcons horizontal noText size="2x" color="mint" />
      </div>
      <div className="HeatMap">
        <GithubCalendar username="glweems" years={[2019]} theme={heatMapTheme} />
        <ReactTooltip />
      </div>
    </Content>
  );
};

export default About;
