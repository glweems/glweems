import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { shuffle } from 'lodash';
import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { baseColors } from '../theme';
import { accounts } from '../utils/data';
import { pick } from '../utils/helpers';
import { rhythm } from '../utils/typography';
import Box from './Common/Box';
import Button from './Common/Button';
import SocialIcon from './Common/SocialIcon';
import { GhostSVG } from './Icons';

export default function Landing() {
  return (
    <Box padding={3} height="100vh" position="relative">
      <AnimatedWrapper container height="100%">
        <Box display="flex">
          <Ghosts />
        </Box>

        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={item}>
            Hello, I&apos;m <span>Garrett Weems</span>.
          </motion.h1>
          <motion.h2 variants={item}>
            I&apos;m a full-stack web developer.
          </motion.h2>
          <motion.p>
            I specialize in javascript / react.js web developement.
          </motion.p>
          <motion.div>
            <Link to="/resume">
              <Button>Resume</Button>
            </Link>
          </motion.div>
        </motion.div>
        <Box
          as={motion.div}
          variants={icons}
          initial="hidden"
          animate="visible"
          display="flex"
          position="absolute"
          bottom="1rem"
          right="1rem"
        >
          {Object.entries(accounts).map(([key, value]) => (
            <SocialIcon key={key} size="2x" account={value} />
          ))}
        </Box>
      </AnimatedWrapper>
    </Box>
  );
}

const Wrapper = styled(Box)`
  --bg-color: ${(props) =>
    props.theme.mode === 'dark'
      ? darken(0.1, props.theme.colors.purple)
      : darken(0.3, props.theme.colors.yellow)};

  position: relative;
  color: ${(props) => props.theme.colors.dark};
  background: linear-gradient(
      45deg,
      transparent 49%,
      var(--bg-color) 50%,
      var(--bg-color) 50%,
      transparent 51%,
      transparent
    ),
    linear-gradient(
      -45deg,
      transparent 49%,
      var(--bg-color) 50%,
      var(--bg-color) 50%,
      transparent 51%,
      transparent
    );
  background-color: ${({ theme: { mode, colors } }) =>
    mode === 'dark' ? colors.purple : colors.yellow};
  background-position: 0% 0%;
  background-size: 16px 16px;
  border: 1px var(--bg-color) solid;
  border-radius: 4px;
  animation: spTexture 2s infinite linear;

  h2 {
    opacity: 0.5;
  }

  .gatsby-image-wrapper {
    margin: ${rhythm(1)} 0;
  }

  span {
    color: ${(props) =>
      props.theme.isDarkMode
        ? props.theme.colors.red
        : props.theme.colors.blue};
  }

  .icons {
    display: flex;
    margin-bottom: ${(props) => props.theme.space[3]};
    > div {
      margin-right: ${(props) => props.theme.space[3]};
      color: black !important;
      border: none;

      * {
        color: black !important;
      }

      :hover {
        background: none;
      }
    }
  }

  button {
    margin-bottom: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.light};
    background: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => darken(0.05, props.theme.colors.blue)};
  }
`;

const icons = {
  hidden: { opacity: 1, scale: 0, justifyContent: 'space-between' },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ghostColors = pick(baseColors, 'blue', 'mint', 'green', 'red');

function Ghosts() {
  return (
    <div>
      {shuffle(Object.entries(ghostColors).map(([key, value]) => key)).map(
        (color) => (
          <GhostSVG color={color} />
        )
      )}
    </div>
  );
}

const AnimatedWrapper = motion.custom(Wrapper);
