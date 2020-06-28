import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { base, blue, purple, red, yellow } from '../theme';
import { accounts } from '../utils/data';
import { rhythm } from '../utils/typography';
import Box from './Common/Box';
import Button from './Common/Button';
import SocialIcon from './Common/SocialIcon';
import { GhostSVG } from './Icons';

const garrettWeems = theme('mode', { light: blue, dark: red });

export default function Landing() {
  const icons = {
    hidden: { opacity: 1, scale: 0, justifyContent: 'space-between' },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box padding={3} height="100vh" position="relative">
      <AnimatedWrapper container height="100%">
        <Box display="flex">
          <GhostSVG />
          <GhostSVG />
          <GhostSVG />
        </Box>
        {/*     <Box as={motion.div}>
          {ghosts.nodes.map((node) => (
            <Img key={node.name} fixed={node.childImageSharp.fixed as FixedObject} draggable={false} />
          ))}
        </Box> */}
        <motion.div className="container" variants={container} initial="hidden" animate="visible">
          <motion.h1 variants={item}>
            Hello, I&apos;m <span>Garrett Weems</span>.
          </motion.h1>
          <motion.h2 variants={item}>I&apos;m a full-stack web developer.</motion.h2>
          <motion.p>I specialize in javascript / react.js web developement.</motion.p>
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
  --bg-color: ${(props) => (props.theme.mode === 'dark' ? darken(0.1, purple) : darken(0.3, yellow))};

  position: relative;
  color: ${base.dark};
  background: linear-gradient(
      45deg,
      transparent 49%,
      var(--bg-color) 50%,
      var(--bg-color) 50%,
      transparent 51%,
      transparent
    ),
    linear-gradient(-45deg, transparent 49%, var(--bg-color) 50%, var(--bg-color) 50%, transparent 51%, transparent);
  background-color: ${({ theme: { mode } }) => (mode === 'dark' ? purple : yellow)};
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
    color: ${garrettWeems};
  }

  .icons {
    display: flex;
    margin-bottom: ${rhythm(1)};
    > div {
      margin-right: ${rhythm(1)};
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
    margin-bottom: ${rhythm(1)};
    color: ${base.light};
    background: ${blue};
    border-color: ${darken(0.05, blue)};
  }
`;

const AnimatedWrapper = motion.custom(Wrapper);
