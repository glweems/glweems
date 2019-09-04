import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import GithubCalendar from 'react-github-calendar';
import Avatar from './Avatar';
import { social, SocialIcon } from './Common';

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

const Landing = (): React.ReactElement => (
  <Wrapper>
    <div />
    <div className="img">
      <Avatar />
    </div>
    <div>
      <h1>
        Hello, I&apos;m <span>Garrett Weems</span>.
      </h1>
      <h3>I&apos;m a full-stack web developer.</h3>
      <p>I specialize in javascript / react.js web developement.</p>
    </div>
    <div className="icons">
      <SocialIcon size="2x" account={social.github} />
      <SocialIcon size="2x" account={social.linkedin} />
      <SocialIcon size="2x" account={social.medium} />
      <SocialIcon size="2x" account={social.instagram} />
      <SocialIcon size="2x" account={social.behance} />
    </div>
    <GithubCalendar username="glweems" years={[2019]}>
      <ReactTooltip delayShow={50} html />
    </GithubCalendar>
  </Wrapper>
);

export default Landing;
