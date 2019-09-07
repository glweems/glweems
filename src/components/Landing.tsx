import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import ReactTooltip from 'react-tooltip';
import GHCalendar from 'react-github-calendar';
import { animated, useSpring, config } from 'react-spring';
import { Ghost } from './Icons';
import { SocialIcon, Container } from './Common';
import { accounts } from '../utils/data';

const GithubCalendar = animated(GHCalendar);

const Wrapper = styled(Container)`
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
    align-self: end;
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 1em;
    padding-bottom: 0.5em;
    text-align: center;
  }
  text {
    display: none;
  }
  .react-github-calendar__title {
    display: none;
  }
  .react-github-calendar__chart {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .react-github-calendar__meta {
    display: none;
    margin: 0;
    padding: 0;
  }
`;

interface Props {
  show: boolean;
}

const Landing = (): React.ReactElement => {
  const { heatMap } = React.useContext(ThemeContext);
  const one = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 600,
    config: config.wobbly,
  });
  const two = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 700,
    config: config.wobbly,
  });
  const three = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 900,
    config: config.wobbly,
  });
  const four = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 1250,
    config: config.wobbly,
  });

  return (
    <Wrapper>
      <div />
      <animated.div style={one}>
        <Ghost />
      </animated.div>
      <animated.div style={two}>
        <h1>
          Hello, I&apos; m <span>Garrett Weems</span>.
        </h1>
        <h3>I&apos;m a full-stack web developer.</h3>
        <p>I specialize in javascript / react.js web developement.</p>
      </animated.div>
      <animated.div className="icons" style={three}>
        <SocialIcon size="2x" account={accounts.github} />
        <SocialIcon size="2x" account={accounts.linkedin} />
        <SocialIcon size="2x" account={accounts.medium} />
        <SocialIcon size="2x" account={accounts.instagram} />
        <SocialIcon size="2x" account={accounts.behance} />
      </animated.div>
      <GithubCalendar
        username="glweems"
        years={[2019]}
        theme={heatMap}
        style={four}
      >
        <ReactTooltip delayShow={50} html />
      </GithubCalendar>
    </Wrapper>
  );
};

export default Landing;
