/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Avitar from './Avitar';
import SocialMediaIcons from './SocialMedia';

const Title = styled.h1`
  color: ${props => props.theme.colors.yellow};
`;
const Subtitle = styled.h4`
  color: ${props => props.theme.colors.red};
`;

const Image = styled.div`
  max-width: 12em;
`;

const SocialMedia = styled.div``;

const Wrapper = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    'Title'
    'Subtitle'
    'Image'
    'SocialMedia';

  ${Title} {
    grid-area: Title;
  }
  ${Subtitle} {
    grid-area: Subtitle;
  }

  ${Image} {
    grid-area: Image;
  }

  ${SocialMedia} {
    grid-area: SocialMedia;
  }
`;

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <Wrapper style={props}>
      <Title>Hi, I'm Garrett</Title>
      <Image>
        <Avitar />
      </Image>
      <Subtitle>Designer / Developer Based in Melbourne, FL.</Subtitle>
      <SocialMediaIcons horizontal noText />
    </Wrapper>
  );
};

export default About;
