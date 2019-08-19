/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactTooltip from 'react-tooltip';
import GithubCalendar from 'react-github-calendar';
import { animated, useTrail } from 'react-spring';
import Avatar from './Avatar';
import { AnimatedSocialMedia } from './SocialMedia';
import { heatMapTheme } from '../utils/theme';

// Create the keyframes
const rotate = keyframes`
    from  { transform: translateX(-50px); }
    to { transform: translateX(100vw);}
`;

const Content = styled(animated.div)`
  overflow: hidden;
  display: grid;
  height: 100vh;
  padding: 1em 0;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    'Ghost'
    'Message'
    'SocialMedia'
    'HeatMap';

  .Message {
    grid-area: Message;
    margin-bottom: 1em;
    * {
      margin: 0;
    }
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

    /* .img {
      animation: ${rotate} 4s ease-in-out infinite;
    } */
  }

  .SocialMedia {
    grid-area: SocialMedia;
    margin: 0;
    height: 3em;
  }
  .HeatMap {
    grid-area: HeatMap;
  }

  .react-github-calendar__title {
    /* display: none; */
  }
`;

const sections = [
  {
    className: `Ghost`,
    component: (
      <>
        <div className="img">
          <Avatar />
        </div>
      </>
    ),
  },
  {
    className: 'Message',
    component: (
      <>
        <h1>
          Hello, I'm <span> Garrett Weems</span>.
        </h1>
        <h3>I'm a full-stack web developer.</h3>
      </>
    ),
  },
  {
    className: `SocialMedia`,
    component: (
      <>
        <AnimatedSocialMedia delay={0} />
      </>
    ),
  },
  {
    className: `HeatMap`,
    component: (
      <GithubCalendar username="glweems" years={[2019]} theme={heatMapTheme}>
        <ReactTooltip html />
      </GithubCalendar>
    ),
  },
];

const About = () => {
  const [toggle, set] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const trail = useTrail(sections.length, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });
  return (
    <Content className="container">
      {trail.map(({ x, ...rest }, i) => (
        <animated.div
          key={sections[i].className}
          className={sections[i].className}
          style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
        >
          {sections[i].component}
        </animated.div>
      ))}
    </Content>
  );
};

export default About;
