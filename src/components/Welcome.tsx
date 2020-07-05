import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { motion } from 'framer-motion';
import Container from './Common/Container';
import config from '../../.gatsby/config';
import Link from './Common/Link';
import { GhostSVG } from './Icons';
import { baseColors } from '../theme';
import { shuffle } from 'lodash';
import SocialIcon from './Common/SocialIcon';
export default function Welcome() {
  return (
    <Styled>
      <motion.div className="Landing__inner">
        <Container>
          <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={container}
              css={`
                display: flex;
              `}
            >
              {['green', 'blue', 'red'].map((color) => (
                <motion.div
                  key={color}
                  variants={item}
                  className="ghost-wrapper"
                >
                  <GhostSVG color={color} size={50} />
                </motion.div>
              ))}
            </motion.div>

            <motion.h1 variants={item}>
              Hello, I&apos;m <span>Garrett Weems</span>.
            </motion.h1>

            <motion.h2 variants={item}>
              I&apos;m a full-stack web developer.
            </motion.h2>

            <motion.p variants={item}>{config.defaultDescription}</motion.p>

            <motion.div variants={item}>
              <Link to="/resume">Resume</Link>
            </motion.div>

            <motion.div variants={icons} className="icons">
              {Object.entries(config.accounts).map(([key, value]) => (
                <motion.div key={key} variants={item}>
                  <SocialIcon size="2x" account={value} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>
    </Styled>
  );
}

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
const checkered = css`
  --bg-color: ${({ theme }) =>
    theme.isDarkMode
      ? darken(0.1, theme.colors.purple)
      : darken(0.3, theme.colors.yellow)};

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
  background-color: var(--color-welcome-bg);
  background-position: 0% 0%;
  background-size: 16px 16px;
  border: 1px var(--bg-color) solid;
  border-radius: 4px;
  animation: spTexture 2s infinite linear;
  @keyframes spTexture {
    from {
      background-position: 0px 0px;
    }
    to {
      background-position: -16px 0px;
    }
  }
`;

const Styled = styled.div`
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.dark};

  .Landing__inner {
    height: 100%;
    padding: ${({ theme }) => theme.space[4]} 0;
    ${checkered}
  }
  * {
    border-bottom: unset;
  }

  h1 {
    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  .icons {
    display: flex;
    justify-content: flex-start;
    margin-top: ${({ theme }) => theme.space[5]};
    a {
      color: ${({ theme }) =>
        theme.isDarkMode ? theme.colors.blue : theme.colors.blue};
    }
  }
`;
