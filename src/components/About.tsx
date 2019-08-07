/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Avitar from './Avitar';
import SocialMediaIcons from './SocialMedia';
import { media, H1, H3, Span, Section } from '../utils/theme';

const Image = styled.div`
  max-width: 12em;
`;

const SocialMedia = styled.div``;

const Content = styled(Section)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  gap: 1em;
  grid-template-areas:
    'Image'
    'Title'
    'SocialMedia';

  ${H1} {
    grid-area: Title;
  }
  ${H3} {
    grid-area: Subtitle;
  }

  ${Image} {
    grid-area: Image;
  }

  ${SocialMedia} {
    grid-area: SocialMedia;
  }

  ${media.greaterThan('sm')`
    grid-template-columns: 10em auto;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      'Image Title'
      'Image Subtitle'
      'Image SocialMedia';
  `}
`;

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <Content style={props}>
      <Image>
        <Avitar />
      </Image>
      <H1>
        Hello, I'm <Span color="yellow"> Garrett Weems</Span>.
        <br />
        <Span color="muted">I'm a full-stack web developer.</Span>
      </H1>
      <SocialMediaIcons horizontal noText size="2x" color="mint" />
    </Content>
  );
};

export default About;
