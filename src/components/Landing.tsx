import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import ReactTooltip from 'react-tooltip';
import GHCalendar from 'react-github-calendar';
import { animated, useSpring, config as springConfig } from 'react-spring';
import { Ghost } from './Icons';
import { SocialIcon, Container, Button, Link } from './Common';
import { accounts } from '../utils/data';
import * as config from '../style';

const GithubCalendar = animated(GHCalendar);

const Wrapper = styled(animated(Container))`
  align-content: space-around;
  height: calc(65vh - ${config.navbarHeight});
  background: ${config.yellow};
  border-radius: ${config.borderRadius};

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
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
    config: springConfig.wobbly,
  });
  // const two = useSpring({
  //   from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
  //   to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  //   delay: 600,
  //   config: springConfig.wobbly,
  // });
  // const three = useSpring({
  //   from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
  //   to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  //   delay: 700,
  //   config: springConfig.wobbly,
  // });
  const four = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 900,
    config: springConfig.wobbly,
  });
  const five = useSpring({
    from: { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    // delay: 1250,
  });

  return (
    <Wrapper style={one}>
      <Ghost />
      <h1>
        Hello, I&apos; m <span>Garrett Weems</span>.
      </h1>
      <h3>I&apos;m a full-stack web developer.</h3>
      <p>I specialize in javascript / react.js web developement.</p>
      <div>
        <Link to="https://docs.google.com/document/d/14e2XLcPLXcNLetW7QvosoBAU5N6ONE-uU1c4VyMjsCA/edit#heading=h.ahxu4umdkayn">
          <Button>Resume</Button>
        </Link>
      </div>
      <animated.div className="icons" style={four}>
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
        style={five}
      >
        <ReactTooltip delayShow={50} html />
      </GithubCalendar>
    </Wrapper>
  );
};

export default Landing;
