import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { motion } from 'framer-motion';
import Container from './common/Container';
import config from '../../.gatsby/config';
import Link from './Common/Link';

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
          </motion.div>
        </Container>
      </motion.div>
    </Styled>
  );
}

const checkered = css`
  --bg-color: ${(props) =>
    props.theme.mode === 'dark'
      ? darken(0.1, props.theme.colors.purple)
      : darken(0.3, props.theme.colors.yellow)};

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
`;

const Styled = styled.div`
  height: 100vh;
  padding: ${({ theme }) => theme.space[3]};
  .Landing__inner {
    height: 100%;
    ${checkered}
  }

  h1 {
    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
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
