import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import GHCalendar from 'react-github-calendar';
import { animated, useSpring } from 'react-spring';
import { Ghost } from './Icons';
import { SocialIcon } from './Common';
import { accounts } from '../utils/data';

const GithubCalendar = animated(GHCalendar);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    [main-start] minmax(0, 40em) [main-end]
    minmax(1em, 1fr) [full-end];
  height: ${props => `calc(100vh - ${props.theme.navbarHeight})`};
  background: ${props => props.theme.colors.yellow};
  border-radius: ${props => props.theme.borderRadius};
  > * {
    grid-column: main;
  }

  p {
    color: #333333;
  }

  .icons {
    > a {
      margin-right: 1em;
    }
  }
  h1 {
    color: #333;
  }
  span {
    color: #1769ff;
  }
  h3 {
    color: #5a5a5a;
  }

  .react-github-calendar {
    grid-column: full;
    align-self: flex-end;
    width: 100%;
    padding-top: 1em;
    padding-bottom: 0.5em;
    text-align: center;
    background: rgb(235, 237, 240);
    border-top: 3px solid ${props => props.theme.lightColors.yellow};
  }
  .react-github-calendar__title {
    display: none;
  }
  .react-github-calendar__chart {
    width: 100%;
    margin: 0 auto;
  }
  .react-github-calendar__meta {
    display: none;
  }
`;

interface Props {
  show: boolean;
}

const Landing = (): React.ReactElement => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Wrapper>
      <div />
      <Ghost />
      <div>
        <h1>
          Hello, I&apos; m <span>Garrett Weems</span>.
        </h1>
        <h3>I&apos;m a full-stack web developer.</h3>
        <p>I specialize in javascript / react.js web developement.</p>
      </div>
      <animated.div className="icons" style={props}>
        <SocialIcon size="2x" account={accounts.github} />
        <SocialIcon size="2x" account={accounts.linkedin} />
        <SocialIcon size="2x" account={accounts.medium} />
        <SocialIcon size="2x" account={accounts.instagram} />
        <SocialIcon size="2x" account={accounts.behance} />
      </animated.div>
      <GithubCalendar username="glweems" years={[2019]} style={props}>
        <ReactTooltip delayShow={50} html />
      </GithubCalendar>
    </Wrapper>
  );
};

export default Landing;
