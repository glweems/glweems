/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import HeatMap from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import Avitar from './Avitar';
import SocialMediaIcons from './SocialMedia';
import { media, heatMapTheme, H1, H3, Span, Section } from '../utils/theme';

const Content = styled(Section)`
  /* height: 80vh; */
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  gap: 0 2em;
  align-items: flex-start;
  align-content: flex-start;
  grid-template-areas:
    'Image'
    'Title'
    'SocialMedia'
    'HeatMap';

  ${H1} {
    grid-area: Title;
    margin: 0;
  }

  .Avitar {
    grid-area: Image;
  }

  .SocialMedia {
    grid-area: SocialMedia;
    margin: 0;
  }
  .HeatMap {
    grid-area: HeatMap;
  }

  ${media.greaterThan('sm')`
    grid-template-columns: auto auto;
    grid-template-rows: repeat(4, auto);
    align-content: center;
    gap: 1em;
    grid-template-areas:
      'Image Title'
      'Image Subtitle'
      'Image SocialMedia'
      'HeatMap HeatMap';
  `}
`;

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <Content style={props}>
      <H1>
        Hello, I'm <Span color="yellow"> Garrett Weems</Span>.
        <br />
        <Span color="muted">I'm a full-stack web developer.</Span>
      </H1>

      <Avitar className="Avitar" />
      <div className="SocialMedia">
        <SocialMediaIcons horizontal noText size="2x" color="mint" />
      </div>
      <div className="HeatMap">
        <HeatMap username="glweems" theme={heatMapTheme} />
        <ReactTooltip delayShow={50} />
      </div>
    </Content>
  );
};

export default About;
