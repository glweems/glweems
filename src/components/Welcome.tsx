import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import config from '../../.gatsby/config';
import Container from './Common/Container';
import Link from './Common/Link';
import SocialIcon from './Common/SocialIcon';
import { GhostSVG } from './Icons';
import Box from './Common/Box';

export default function Welcome() {
  return (
    <Styled>
      <motion.div className="Landing__inner">
        <Container padding={2}>
          <motion.div variants={container} initial="hidden" animate="visible">
            <Box as={motion.div} variants={container} display="flex">
              {['green', 'blue', 'red'].map((color) => (
                <motion.div
                  key={color}
                  variants={item}
                  className="ghost-wrapper"
                >
                  <GhostSVG color={color} size={50} />
                </motion.div>
              ))}
            </Box>

            <hgroup>
              <h1>
                Hello, I&apos;m <mark>Garrett Weems</mark>.
              </h1>
              <h2>{config.defaultDescription}</h2>
            </hgroup>

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
  hidden: { opacity: 1, scale: 0 },
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

const Styled = styled.div`
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.dark};
  .ghost-wrapper {
    margin-right: ${({ theme }) => theme.space[2]};
  }
  .Landing__inner {
    height: 100%;
    padding: ${({ theme }) => theme.space[4]} 0;
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
    div {
      margin-right: ${({ theme }) => theme.space[2]};
    }

    a {
      color: ${({ theme }) =>
        theme.isDarkMode ? theme.colors.blue : theme.colors.blue};
    }
  }
`;
