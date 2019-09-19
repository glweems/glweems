import React from 'react';
import styled from 'styled-components';
import { animated, useSpring, config as springConfig } from 'react-spring';
import theme from 'styled-theming';
import { darken } from 'polished';
import { Ghost } from './Icons';
import { SocialIcon, Container, Button, Link } from './Common';
import { accounts } from '../utils/data';
import * as config from '../style';
import { rhythm } from '../utils/typography';

const wrapperBg = theme('mode', { light: config.yellow, dark: config.bg });
const garrettWeems = theme('mode', { light: config.blue, dark: config.yellow });

const Wrapper = styled(Container)`
  .gatsby-image-wrapper {
    margin: ${rhythm(1)} 0;
  }
  background: ${wrapperBg};
  p {
    color: ${config.muted};
  }
  span {
    color: ${garrettWeems};
  }
  .icons {
    margin-bottom: ${rhythm(1)};
    > a {
      margin-right: ${rhythm(1)};
    }
  }
  button {
    margin-bottom: ${rhythm(1)};
    color: ${config.base.light};
    background: ${config.blue};
    border-color: ${darken(0.05, config.blue)};
  }
`;

const AnimatedWrapper = animated(Wrapper);

const Landing = (): React.ReactElement => {
  const animation = useSpring({
    from: { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 900,
    config: springConfig.gentle,
  });

  return (
    <AnimatedWrapper style={animation}>
      <Ghost />
      <div>
        <h1>
          Hello, I&apos;m <span>Garrett Weems</span>.
        </h1>
        <h3>I&apos;m a full-stack web developer.</h3>
        <p>I specialize in javascript / react.js web developement.</p>
      </div>
      <div>
        <Link to="https://docs.google.com/document/d/14e2XLcPLXcNLetW7QvosoBAU5N6ONE-uU1c4VyMjsCA/edit#heading=h.ahxu4umdkayn">
          <Button>Resume</Button>
        </Link>
      </div>
      <animated.div className="icons">
        <SocialIcon size="2x" account={accounts.github} />
        <SocialIcon size="2x" account={accounts.linkedin} />
        <SocialIcon size="2x" account={accounts.medium} />
        <SocialIcon size="2x" account={accounts.instagram} />
        <SocialIcon size="2x" account={accounts.behance} />
      </animated.div>
    </AnimatedWrapper>
  );
};

export default Landing;
